function compressMatrix(matrix, key) {
  let compressedMatrix = '';
  matrix.forEach((row, index) => {
    let compressedRow = '';
    let compressedEnd = index === matrix.length - 1 ? '' : 'row';
    row.forEach((value, column) => {
      if (value === '') {
        compressedRow += key;
      } else {
        compressedRow += value + key;
      }
    });
    compressedMatrix += compressedRow + compressedEnd;
  })
  return compressedMatrix;
}

function decompressMatrix(compressedMatrix, key) {
  let splitCompressed = compressedMatrix.split(',row');
  console.log(splitCompressed);
  let decompressedMatrix = splitCompressed.map((row, index) => {
    if (index === splitCompressed.length - 1) {
      return row.split(key).slice(0, -1);
    }
    return row.split(key);
  });
  return decompressedMatrix;
}

var tester = [
    ['1', '2', '3', '4', '5', '6', '7', '8', ''],
    ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    ['1', '2', '3', '4', '5', '6', '7', '8', '9']
];

var tester2 = [
    ['1', '2', '', '4', '5', '6', '', '8', ''],
    ['1', '2', '', '4', '5', '6', '', '8', ''],
    ['1', '2', '', '4', '5', '6', '', '8', ''],
    ['1', '2', '', '4', '5', '6', '', '8', '9'],
    ['1', '2', '', '4', '5', '6', '', '8', '9'],
    ['1', '2', '', '4', '5', '6', '', '8', '9'],
    ['1', '2', '', '4', '5', '6', '', '8', '9'],
    ['1', '2', '', '4', '5', '6', '', '8', '9'],
    ['1', '2', '', '4', '5', '6', '', '8', '9']
];

// var compResult = compressMatrix(tester, ',');

// console.log('compResult: ', compResult);

// var decompResult = decompressMatrix(compResult, ',');

// console.log('decompResult: ', decompResult);

var compResult = compressMatrix(tester2, ',');

console.log('compResult: ', compResult);

var decompResult = decompressMatrix(compResult, ',');

console.log('decompResult: ', decompResult);


