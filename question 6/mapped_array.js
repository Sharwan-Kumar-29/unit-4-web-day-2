function mappedArray(arr){
    arr = arr.split(" ").map(Number);

    let modifiedArray = arr.map((elem) => {
        return elem * 2
    })

    console.log(modifiedArray)
}

// Enter the lis of numbers separated by spaces to get a modified array of numbers;
mappedArray("1 2 3 4 5")