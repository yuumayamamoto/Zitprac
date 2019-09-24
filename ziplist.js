const t1 = ['a','b','c','d'];
const t2 = [1,2,3,4];

function zipList(a1,a2) {
  const arr =[];
  let i = 0;
  for (const lis of a1) {
    arr.push(lis);
    arr.push(a2[i]);
    i++;
  }
  return arr;
}

console.log(zipList(t1,t2));

function zipListTheSimpleWay(arr1,arr2) {
  return _.flatten(_.zip(arr1,arr2));
}
console.log(zipListTheSimpleWay(t1,t2));
