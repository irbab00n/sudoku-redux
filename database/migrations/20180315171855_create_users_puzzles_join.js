
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.hasTable('users_puzzles_join').then(exists => {
      if (!exists) {
        return knex.schema.createTable('users_puzzles_join', function(table) {
          table.increments();
          table.string('type', 25);
          table.integer('user_id').references('id').inTable('users');
          table.integer('puzzle_id').references('id').inTable('puzzles');
          table.string('solution', 255);
        });
      }
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users_puzzles_join')
  ]);
};
