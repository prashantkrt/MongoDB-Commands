// who has registered most recently ?
[
    {
      $sort: {
        registered: -1,
      },
    },
    {
      $limit: 4,
    },
    {
      $project: {
        name: 1,
        registered: 1,
        favoriteFruit: 1,
      },
    },
  ];

  // categorize users by their favoriteFruit

  [
    {
      $group: {
        _id: "$favoriteFruit",
        users: { $push: "$name" },
      },
    },
  ];

  // How many users have 'ad' as second tag in their list of tags ?
  [
    {
      $match: {
        "tags.1": "ad",
      },
    },
    {
      $count: 'string'
    }
  ];

// Find the users who have both 'enim and 'id' as their tags? 

[
    {
      $match: {
        "tags": "enim",
        "tags": "id"
      },
    },
    
  ];


  //better way 

  [
    {
      $match: {
        "tags": {
          $all : ["enim", "id"]
        }    
      },
    },
    
  ];

// List of all the companies located in USA with their corresponding user count

[
    {
      $match: {
        "company.location.country": "USA",
      },
    },
    {
      $group: {
        _id: "$company.title",
        userCount: { $sum: 1 },
      },
    },
  ]



