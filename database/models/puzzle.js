const bookshelf = require('../bookshelf');

const Puzzle = bookshelf.Model.extend({
  tableName: 'puzzles'
});

module.exports = bookshelf.model('Puzzle', Puzzle);