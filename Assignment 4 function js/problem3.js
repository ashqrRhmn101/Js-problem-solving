function sortMaker(arr) {
  if (arr[0] < 0 || arr[1] < 0) {
    console.log("Invalid Input");
    return;
  } else if (arr[0] === arr[1]) {
    console.log("equal");
    return;
  }
  const result = arr.sort((a, b) => b - a);
  console.log(result);
}
sortMaker([2, 4]);
sortMaker([4, 4]);
sortMaker([5, 4]);
sortMaker([1, 3]);
sortMaker([0, -7]);
