const fs = require('fs');

var cellInfo = [];
var fileContents = fs.readFileSync(__dirname + '/cell_information.csv');
console.log(fileContents.toString());
var rows = fileContents.toString('utf-8').split('\n');

console.log(rows.length);

for (var i = 0; i < rows.length; i++) {
	cellInfo.push(rows[i].toString().split(','));
}

cellInfo = cellInfo.splice(1,cellInfo.length - 2);

cellTypes = [];
answerKeys = [ [], [], [], [], [] ];

//      page:   1    2    3    4    5
answerKeys = [ [] , [] , [] , [] , [] ];
for (var i = 0; i < cellInfo.length; i++) {
    cellTypes.push(cellInfo[i][1]);
    answerKeys[Math.floor(i/10)].push(cellInfo[i][2]);
}

exports.answerKeys = answerKeys;
exports.cellTypes = cellTypes;