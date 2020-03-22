function stringTimes(str, n){
  var returnStr = "";
  var i = 0;
  while (i<n) {
    returnStr += str
    i++
  }
  return returnStr
}
function monkeyTrouble(aSmile, bSmile){
  return (aSmile && bSmile) || (!aSmile && !bSmile)
}


function luckySum(a, b, c){
  if (a===13) {
    return 0;
  }else if (b===13) {
    return a;

  }else if (c===13) {
    return a+b;
  }else {
    return a+b+c;
  }
}
