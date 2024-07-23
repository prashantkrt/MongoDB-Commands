// lookup

// in books collection 
[
    {
      $lookup: {
        from: "authors",
        localField: "author_id",
        foreignField: "_id",
        as: "author_details",
      },
    },
  ]


  [
    {
      $lookup: {
        from: "authors",
        localField: "author_id",
        foreignField: "_id",
        as: "author_details",
      },
    },
    {
      $addFields: {
        authorDetails: {
          $first : "$author_details"      
        }, 
      }
    }
  ]

  // better for fetching the first index post filtering the data through pipeline
  [
    {
      $lookup: {
        from: "authors",
        localField: "author_id",
        foreignField: "_id",
        as: "author_details",
      },
    },
    {
      $addFields: {
        authorDetails: {
          $arrayElemAt : ["$author_details",0]      
        }, 
      }
    }
  ]