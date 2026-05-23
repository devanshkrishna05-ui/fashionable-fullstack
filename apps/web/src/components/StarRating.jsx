import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function StarRating({ rating, setRating, readOnly = false, size = "md" }) {
  const [hover, setHover] = useState(0);

  const starSize = size === "lg" ? "w-8 h-8" : size === "sm" ? "w-4 h-4" : "w-5 h-5";

  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        
        return (
          <motion.button
            key={index}
            type="button"
            whileHover={!readOnly ? { scale: 1.2 } : {}}
            whileTap={!readOnly ? { scale: 0.9 } : {}}
            className={`${readOnly ? 'cursor-default' : 'cursor-pointer'} focus:outline-none`}
            onClick={() => !readOnly && setRating(ratingValue)}
            onMouseEnter={() => !readOnly && setHover(ratingValue)}
            onMouseLeave={() => !readOnly && setHover(0)}
          >
            <Star
              className={`${starSize} transition-colors duration-200 ${
                ratingValue <= (hover || rating)
                  ? "fill-[#FF006E] text-[#FF006E]"
                  : "text-gray-600"
              }`}
            />
          </motion.button>
        );
      })}
    </div>
  );
}