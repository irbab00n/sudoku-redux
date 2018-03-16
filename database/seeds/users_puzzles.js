
exports.seed = function(knex, Promise) {
  return knex('users_puzzles_join').del()
    .then(function () {
      return knex('users_puzzles_join').insert([
        {id: 1, type: 'progress', user_id: 1, puzzle_id: 3, solution: '4,2,5,,,8,,2,,row,,,1,,,,,,row,2,,,6,7,,9,,row,,8,,,,,3,,row5,,6,,,,2,,1,row,1,,,,,4,,,row,8,,9,7,,,6,,row,,,,,1,,,,row,9,,8,,,5,,7,'},
        {id: 2, type: 'progress', user_id: 2, puzzle_id: 2, solution: '4,3,5,,,8,,2,,row,,,1,,,,,,row,2,,,6,7,,9,,row,,8,,,,,3,,row5,,6,,,,2,,1,row,1,,,,,4,,,row,8,,9,7,,,6,,row,,,,,1,,,,row,9,,8,,,5,,7,'},
        {id: 3, type: 'progress', user_id: 3, puzzle_id: 1, solution: '4,6,5,,,8,,2,,row,,,1,,,,,,row,2,,,6,7,,9,,row,,8,,,,,3,,row5,,6,,,,2,,1,row,1,,,,,4,,,row,8,,9,7,,,6,,row,,,,,1,,,,row,9,,8,,,5,,7,'}
      ]);
    });
};
