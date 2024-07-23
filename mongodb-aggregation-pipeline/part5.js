// how nany users have 'enim' as their tags ?
[
  {
    $match: {
      tags: "enim",
    },
  },
  {
    $count: "values",
  },
];

// What are the names and age of users who are inactive and have 'velit' as their tags ?

[
    {
      $match: {
        isActive: false,
        tags: "velit",
      },
    },
    {
      $project: {
        name: 1,
        age: 1,
      },
    },
  ]

  // How many user phone number starting with '+1 (940)'?
  
  [
    {
      $match: {
        "company.phone": /^\+1 \(940\)/
      },
    },
    {
      $count: "total"
    }
  ]