
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('users', function(table) {
      table.increments(),
      table.string('first_name', 100).nullable(),
      table.string('last_name', 100).nullable(),
      table.string('username', 100).notNullable().unique(),
      table.string('email', 255).notNullable.unique()
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users')
  ]);
};
