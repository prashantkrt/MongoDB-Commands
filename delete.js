// delete: The deleteOne method deletes the first document that matches the filter,
// while deleteMany deletes all documents that match the filter.
// remove: The remove method behaves like deleteMany, deleting all documents that match the filter.

db.customer.deleteOne({item:"Dabba"})

db.customer.deleteMany({"qty":{$ite:20}}) //  is less than or equal to 20

db.inventory.remove({item:"Dabba"})

// deletes all the collectionss
db.customer.deleteMany({})

db.inventory.findOneAndDelete(
    { "item" : "Tiffin" }
 )