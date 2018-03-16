
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('puzzles', function(table) {
      table.incremens(),
      table.string('initial', 255),
      table.string('difficulty', 100)
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('puzzles')
  ]);
};
