
exports.seed = function(knex, Promise) {
  return knex('puzzles').del()
    .then(function () {
      return knex('puzzles').insert([
        {id: 1, initial: ',,,,,8,,,4,row,8,4,,1,6,,,,row,,,5,,,1,,,row1,,3,8,,,9,,,row6,,8,,,,4,,3,row,,2,,,9,5,,1,row,,7,,,2,,,,row,,,7,8,,2,6,,row2,,,3,,,,,,', difficulty: 'easy'},
        {id: 2, initial: ',,,,9,,,1,3,row,,,5,,3,,4,,row9,4,,,,,7,,2,row,,4,8,,,,,,row6,,,9,,2,,,8,row,,,,,6,4,,,row3,,5,,,,,2,7,row,7,,3,,8,,,,row4,6,,,5,,,,,', difficulty: 'medium'},
        {id: 3, initial: '4,,5,,,8,,2,,row,,,1,,,,,,row,2,,,6,7,,9,,row,,8,,,,,3,,row5,,6,,,,2,,1,row,1,,,,,4,,,row,8,,9,7,,,6,,row,,,,,1,,,,row,9,,8,,,5,,7,', difficulty: 'hard'}
      ]);
    });
};
