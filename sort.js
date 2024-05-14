//ascending order
db.inventory.find().sort({"qty":1})
//descending order
db.inventory.find().sort({"qty":-1})
//skips the first document
db.inventory.find().skip(1)
//limits the documents
db.inventory.find.limit(2)