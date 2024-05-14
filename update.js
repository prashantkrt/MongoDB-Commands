//update commands
db.inventory.updateOne(
    { "item": "Tiffin" },
    {
        $set: {
            "qty": 20,
            "size.height": 23,
            "tags": ["item1", "item2", "item3"]
        },
        $currentDate: { lastmodified: true }
    }
)

db.inventory.updateMany(
    { "qty": { $lt: 20 } },
    {
        $set: {
            "qty": 20,
            "size.height": 23,
            "tags": ["item1", "item2", "item3"]
        },
        $currentDate: { lastmodified: true }
    }
)

db.inventory.replaceOne(
    { "item": "Box" },
    {
        item: 'paper',
        instock: [{ warehouse: 'A', qty: 60 }, { warehouse: 'B', qty: 40 }]
    }
)


db.inventory.findOneAndReplace(
    { "qty" : { $lt : 20000 } },
    { "team" : "Observant Badgers", "score" : 20000 }
 )

 db.inventory.findOneAndUpdate(
    { "item" : "Tiffin" },
    {$set: {
        "qty": 20,
        "size.height": 23,
        "tags": ["item1", "item2", "item3"]
    },
    $currentDate: { lastmodified: true }
   }
 )




