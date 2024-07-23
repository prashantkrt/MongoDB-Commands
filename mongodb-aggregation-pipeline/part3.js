// Find the totaL number of males and females

[
  {
    $group: {
      _id: "$gender",
      genderCount: {
        $sum: 1,
      },
    },
  },
];

// which country has the highest number of registered users?

[
  {
    $group: {
      _id: "$company.location.country",
      userCount: {
        $sum: 1,
      },
    },
  },
  {
    $sort: {
      userCount: -1,
    },
  },
  {
    $limit: 5,
  },
];

// List all the unique eyes present in the collection

[
    {
      $group: {
        _id: "$eyeColor",  
        count:{
            $sum:1  // gives per count based on eyes 
        }  
      }
    }
  ]


  [
    {
      $group: {
        _id: "$eyeColor"
      }
    },
    {
      $count: "distinctEyeColors"
    }
  ]


  // or 


  [
    {
      $group: {
        _id: "$eyeColor"
      }
    },
    {
      $count: "eyeColors"
    }
  ]

