#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const CLEAN_CONTENT_REGEX = {
	comments: /\/\*[\s\S]*?\*\/|\/\/.*$/gm,
	templateLiterals: /`[\s\S]*?`/g,
	strings: /'[^']*'|"[^"]*"/g,
	jsxExpressions: /\{.*?\}/g,
	htmlEntities: {
		quot: /&quot;/g,
		amp: /&amp;/g,
		lt: /&lt;/g,
		gt: /&gt;/g,
		apos: /&apos;/g
	}
};

const EXTRACTION_REGEX = {
	route: /<Route\s+[^>]*>/g,
	path: /path=["']([^"']+)["']/,
	element: /element=\{<(\w+)[^}]*\/?\s*>\}/,
	helmet: /<Helmet[^>]*?>([\s\S]*?)<\/Helmet>/i,
	helmetTest: /<Helmet[\s\S]*?<\/Helmet>/i,
	title: /<title[^>]*?>\s*(.*?)\s*<\/title>/i,
	description: /<meta[^>]*?name=["']description["'][^>]*?content="([^"]*)"|<meta[^>]*?name=["']description["'][^>]*?content='([^']*)'|<meta[^>]*?content="([^"]*)"[^>]*?name=["']description["']|<meta[^>]*?content='([^']*)'[^>]*?name=["']description["']/i
};

function cleanContent(content) {
	return content.replace(CLEAN_CONTENT_REGEX.comments, '');
}

function cleanText(text) {
	if (!text) return text;

	return text
		.replace(CLEAN_CONTENT_REGEX.jsxExpressions, '')
		.replace(CLEAN_CONTENT_REGEX.htmlEntities.quot, '"')
		.replace(CLEAN_CONTENT_REGEX.htmlEntities.amp, '&')
		.replace(CLEAN_CONTENT_REGEX.htmlEntities.lt, '<')
		.replace(CLEAN_CONTENT_REGEX.htmlEntities.gt, '>')
		.replace(CLEAN_CONTENT_REGEX.htmlEntities.apos, "'")
		.trim();
}

function extractRoutes(appJsxPath) {
	if (!fs.existsSync(appJsxPath)) return new Map();

	try {
		const content = fs.readFileSync(appJsxPath, 'utf8');
		const routes = new Map();
		const routeMatches = [...content.matchAll(/<Route\s+[\s\S]*?element=\{([\s\S]*?)\}/g)];

		for (const match of routeMatches) {
			const fullBlock = match[0];
			const elementContent = match[1];
			
			const pathMatch = fullBlock.match(/path=["']([^"']+)["']/);
			const isIndex = fullBlock.includes('index');
			let routePath = '/';

			if (!isIndex && pathMatch) {
				routePath = pathMatch[1].startsWith('/') ? pathMatch[1] : `/${pathMatch[1]}`;
			}

			const tags = [...elementContent.matchAll(/<(\w+)/g)].map(m => m[1]);
			const componentName = tags.find(tag => tag !== 'ProtectedRoute' && tag !== 'Suspense');

			if (componentName) {
				routes.set(componentName, routePath);
			}
		}

		return routes;
	} catch (error) {
		console.error('❌ Failed to parse routes from App.jsx:', error.message);
		return new Map();
	}
}

function findReactFiles(dir) {
	return fs.readdirSync(dir).map(item => path.join(dir, item));
}

function extractHelmetData(content, filePath, routes) {
	const cleanedContent = cleanContent(content);

	if (!EXTRACTION_REGEX.helmetTest.test(cleanedContent)) {
		return null;
	}

	const helmetMatch = content.match(EXTRACTION_REGEX.helmet);
	if (!helmetMatch) return null;

	const helmetContent = helmetMatch[1];
	const titleMatch = helmetContent.match(EXTRACTION_REGEX.title);
	const descMatch = helmetContent.match(EXTRACTION_REGEX.description);

	const title = cleanText(titleMatch?.[1]);
	const description = cleanText(descMatch?.[1] || descMatch?.[2] || descMatch?.[3] || descMatch?.[4]);

	const fileName = path.basename(filePath, path.extname(filePath));
	const url = routes.size && routes.has(fileName)
		? routes.get(fileName)
		: generateFallbackUrl(fileName);

	return {
		url,
		title: title || 'Untitled Page',
		description: description || 'No description available'
	};
}

function generateFallbackUrl(fileName) {
	const cleanName = fileName.replace(/Page$/, '').toLowerCase();
	return cleanName === 'app' ? '/' : `/${cleanName}`;
}

function generateLlmsTxt(pages) {
	const domain = 'https://getfashionable.shop';
	const sortedPages = pages.sort((a, b) => a.title.localeCompare(b.title));
	
	const corePages = sortedPages.filter(p => !['/privacy', '/affiliate-disclosure', '/terms'].includes(p.url));
	const resources = sortedPages.filter(p => ['/privacy', '/affiliate-disclosure', '/terms'].includes(p.url));

	const coreEntries = corePages.map(page => {
		const fullUrl = page.url.startsWith('/') ? `${domain}${page.url}` : page.url;
		return `- [${page.title}](${fullUrl}): ${page.description}`;
	}).join('\n');

	const resourceEntries = resources.map(page => {
		const fullUrl = page.url.startsWith('/') ? `${domain}${page.url}` : page.url;
		return `- [${page.title}](${fullUrl}). ${page.description}`;
	}).join('\n');

	return `# Fashionable

> Fashion discovery and beauty price comparison platform designed for Gen Z shoppers. Compare prices across Nykaa, Amazon, Tira, Myntra, and more.

## Core Pages

${coreEntries}

## Resources & Policies

${resourceEntries}

## Agentic & API Access

Autonomous AI agents can query our live product database directly in JSON format instead of scraping the UI:
- **Base Endpoint:** \`https://pocketbase-app-production-964e.up.railway.app/api/collections/products/records\`
- **Method:** GET
- **Query Parameters:**
  - \`perPage\` (number): Limit output items (default 30)
  - \`filter\` (string): Filter syntax (e.g. \`name ~ "lipstick"\` or \`category = "makeup"\`)
  - \`sort\` (string): Sort syntax (e.g. \`-created\` or \`price\`)
`;
}

function ensureDirectoryExists(dirPath) {
	if (!fs.existsSync(dirPath)) {
		fs.mkdirSync(dirPath, { recursive: true });
	}
}

function processPageFile(filePath, routes) {
	try {
		const content = fs.readFileSync(filePath, 'utf8');
		return extractHelmetData(content, filePath, routes);
	} catch (error) {
		console.error(`❌ Error processing ${filePath}:`, error.message);
		return null;
	}
}

function main() {
	const pagesDir = path.join(process.cwd(), 'src', 'pages');
	const appJsxPath = path.join(process.cwd(), 'src', 'App.jsx');

	let pages = [];

	if (!fs.existsSync(pagesDir)) {
		pages.push(processPageFile(appJsxPath, []))
		pages = pages.filter(Boolean);
	} else {
		const routes = extractRoutes(appJsxPath);
		const reactFiles = findReactFiles(pagesDir);

		pages = reactFiles
			.map(filePath => processPageFile(filePath, routes))
			.filter(Boolean);
	}

	if (pages.length === 0) {
		console.error('❌ No pages with Helmet components found!');
		process.exit(1);
	}


	const llmsTxtContent = generateLlmsTxt(pages);
	const outputPath = path.join(process.cwd(), 'public', 'llms.txt');

	ensureDirectoryExists(path.dirname(outputPath));
	fs.writeFileSync(outputPath, llmsTxtContent, 'utf8');
	console.log(`✅ Success! Dynamic llms.txt generated at ${outputPath}`);
}

main();
