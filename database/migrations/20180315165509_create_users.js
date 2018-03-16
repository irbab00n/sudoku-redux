
exports.up = (knex, Promise) => {
  return Promise.all([
    knex.schema.hasTable('users').then(exists => {
      if (!exists) {
        return knex.schema.createTable('users', table => {
          table.increments();
          table.string('first_name', 100).nullable();
          table.string('last_name', 100).nullable();
          table.string('username', 100).notNullable().unique();
          table.string('email', 255).notNullable().unique();
        });
      }
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users')
  ]);
};
