const bookshelf = require('../bookshelf');

const UserPuzzleJoin = bookshelf.Model.extend({
  tableName: 'users_puzzles_join',
  user: function() {
    return this.belongsTo('User')
  },
  puzzle: function() {
    return this.belongsTo('Puzzle')
  }
});

module.exports = bookshelf.model('UserPuzzleJoin', UserPuzzleJoin);