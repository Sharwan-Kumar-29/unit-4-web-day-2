function reducedArray(arr) {
  arr = arr.split(";").map(Number);

  let reduced_Array = arr.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  console.log(reduced_Array);
}

reducedArray("10; 15; 5");
