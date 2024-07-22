// average age of all the users

[
  {
    $group: {
      _id: null, // whole documents
      averageAge: {
        $avg: "$age",
      },
    },
  },
];

[
  {
    $group: {
      _id: "$gender", // based on gender grouping documents
      averageAge: {
        $avg: "$age",
      },
    },
  },
];

// list the top 2 most common favorite fruits among the users
[
  {
    $group: {
      _id: "$favouriteFruit",
      count: {
        $sum: 1, // add count 1
      },
    },
  },
  {
    $sort: {
      count: -1,
    },
  },
  {
    $limit: 2,
  },
];
