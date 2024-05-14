db.inventory.find()

db.inventory.find({})

db.inventory.find({item:"Box"})

db.inventory.find({}).pretty()

db.inventory.find({tags:{ $in:["small","medium"]}})

db.inventory.find({"size.length":80})

db.inventory.find(({"size.length":{ $in :[10,80]}}))

db.inventory.find({"qty":{$lt:200}})

//and
db.inventory.find({"size.length":80, qty: {$gt: 50}})
//or
db.inventory.find({$or:[{"size.length":80, qty: {$gt: 50}}]})

db.inventory.findOne({$or:[{"size.length":80, qty: {$gt: 50}}]}).tags[0]


db.products.find({
    category: { $in: ["Electronics", "Clothing"] }
})


//and no need to explicity write 
db.products.find({
    $and: [
      { category: "Electronics" },
      { price: { $lte: 500 } }
    ]
  })  
//need to write explicity
db.products.find({
    $or: [
      { category: "Electronics" },
      { price: { $lte: 500 } }
    ]
  })  

//only one 
//document single row  
db.inventory.findOne({})


//count
db.inventory.countDocuments()
db.inventory.countDocuments({ item: "Tiffin"})



