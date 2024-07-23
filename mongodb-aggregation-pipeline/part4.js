// average number of tags per user

[
    {
      $unwind: "$tags",
    },
    {
      $group: {
        _id: "$_id",
        numberOfTags: {
          $sum: 1,
        },
      },
    },
    {
      $group: {
        _id: null,
        averageNumberOfTagsPerUser: {
          $avg: "$numberOfTags",
        },
      },
    },
  ];

// another way !!!
[
    {
      $addFields: {
        numberOfTags: {
          $size: {
            $ifNull: ["$tags", []],
          },
        },
      },
    },
    {
      $group: {
        _id: null,
        averageNumberOfTagsPerUser: {
          $avg: "$numberOfTags",
        },
      },
    },
  ]