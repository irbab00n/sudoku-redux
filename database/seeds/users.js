
exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {id: 1, first_name: 'Thomas', last_name: 'Cosby', username: 'cosbyte', email: 'example@yeaho.com'},
        {id: 2, first_name: 'Joe', last_name: 'Schmoe', username: 'jschmokey', email: 'jschmokey@yeaho.com'},
        {id: 3, first_name: 'Knowit', last_name: 'All', username: 'knowitall', email: 'knowitall@yeaho.com'}
      ]);
    });
};
