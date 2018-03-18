const matrixCompressor = require('../helpers/matrixCompressor.js');

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function buildMatrix(size) {
  let matrix = [];
  let range = ['', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  for (let i = 0; i < size; i++) {
    let row = [];
    for (let j = 0; j < size; j++) {
      row[j] = range[getRandomIntInclusive(0, range.length- 1)];
    }
    matrix[i] = row;
  }
  return matrix;
}

function runTestsToCount(count) {
  console.log(`Running random matrix compression and decompression tests ${count} times`);
  let counter = 1;
  const key = ','
  while (counter <= count) {
    let testMatrix = buildMatrix(9);
    let testCompressedMatrix = matrixCompressor.compress(testMatrix, key);
    test(`test ${counter}: matrix should compress and decompress correctly`, () => {
      expect(matrixCompressor.decompress(testCompressedMatrix, key)).toEqual(testMatrix);
    });
    counter++;
  }
}

runTestsToCount(100);