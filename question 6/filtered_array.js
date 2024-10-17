function filteredArray(arr) {
  arr = arr.split(",").map(Number);

  let filtered_Array = arr.filter((elem) => {
    return elem % 2 == 0;
  });

  console.log(filtered_Array);
}

// Enter the list on integers separated by commas to get a filtered array.
filteredArray("1, 2, 3, 4, 5");
