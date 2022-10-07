//https://www.geeksforgeeks.org/minimize-cash-flow-among-given-set-friends-borrowed-money/

var getMax = function (amount) {
  let maxInd = 0;
  for (let i = 0; i < amount.length; i++) {
    if (amount[i] > amount[maxInd]) {
      maxInd = i;
    }
  }
  return maxInd;
};
var getMin = function (amount) {
  let minInd = 0;
  for (let i = 0; i < amount.length; i++) {
    if (amount[i] < amount[minInd]) {
      minInd = i;
    }
  }
  return minInd;
};
var minOftwo = function (x, y) {
  return x < y ? x : y;
};
var minCashFlowRec = function (amount) {
  var mxCredit = getMax(amount),
    mxDebit = getMin(amount);
  if (amount[mxCredit] == 0 && amount[mxDebit] == 0) return;
  var min = minOftwo(amount[mxCredit], -amount[mxDebit]);
  amount[mxCredit] -= min;
  amount[mxDebit] += min;
  console.log("Person " + mxDebit + " pays " + min + " to Person " + mxCredit);
  minCashFlowRec(amount);
};
var minCashFlow = function (graph) {
  let arrOfTotalAmount = [];
  for (let j = 0; j < graph[0].length; j++) {
    let sum = 0;
    for (let i = 0; i < graph[0].length; i++) {
      sum += graph[i][j] - graph[j][i];
    }
    arrOfTotalAmount.push(sum);
  }
  minCashFlowRec(arrOfTotalAmount);
};

console.log(
  minCashFlow([
    [0, 1000, 2000],
    [0, 0, 5000],
    [0, 0, 0],
  ])
);
