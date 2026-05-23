/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_176316437")

  // update field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "autodate2990389176",
    "name": "name",
    "onCreate": true,
    "onUpdate": false,
    "presentable": true,
    "system": false,
    "type": "autodate"
  }))

  // update field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "autodate3332085495",
    "name": "description",
    "onCreate": true,
    "onUpdate": true,
    "presentable": true,
    "system": false,
    "type": "autodate"
  }))

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "autodate3309110367",
    "name": "image",
    "onCreate": true,
    "onUpdate": false,
    "presentable": true,
    "system": false,
    "type": "autodate"
  }))

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "autodate3760176746",
    "name": "images",
    "onCreate": true,
    "onUpdate": false,
    "presentable": true,
    "system": false,
    "type": "autodate"
  }))

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "autodate105650625",
    "name": "category",
    "onCreate": true,
    "onUpdate": false,
    "presentable": true,
    "system": false,
    "type": "autodate"
  }))

  // update field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "autodate2688775892",
    "name": "viralTags",
    "onCreate": true,
    "onUpdate": false,
    "presentable": true,
    "system": false,
    "type": "autodate"
  }))

  // update field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "autodate68359771",
    "name": "retailers",
    "onCreate": true,
    "onUpdate": false,
    "presentable": true,
    "system": false,
    "type": "autodate"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_176316437")

  // update field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "autodate2990389176",
    "name": "name",
    "onCreate": true,
    "onUpdate": false,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  // update field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "autodate3332085495",
    "name": "description",
    "onCreate": true,
    "onUpdate": true,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "autodate3309110367",
    "name": "image",
    "onCreate": true,
    "onUpdate": false,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "autodate3760176746",
    "name": "images",
    "onCreate": true,
    "onUpdate": false,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "autodate105650625",
    "name": "category",
    "onCreate": true,
    "onUpdate": false,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  // update field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "autodate2688775892",
    "name": "viralTags",
    "onCreate": true,
    "onUpdate": false,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  // update field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "autodate68359771",
    "name": "retailers",
    "onCreate": true,
    "onUpdate": false,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  return app.save(collection)
})
