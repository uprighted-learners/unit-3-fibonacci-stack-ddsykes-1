// Create the `series` variable
//var series = [0, 1];
let series1 = false;
let series = [0,1,1,2,3,5,8,13,21,34];
while (series1.length < 10) {
  // your code here
  series.push(series);
  console.log(series)
  let firstPop = series.pop();
  let secondPop = series.pop();
  let sum = firstPop + secondPop;
 series.push(firstPop, secondPop, sum);
 series.pop(firstPop, secondPop, sum);
}


// Print the Fibonacci sequence to the console
console.log(series);
// the first ten numbers should be
// 0 1 1 2 3 5 8 13 21 34
console.log(series.join());

