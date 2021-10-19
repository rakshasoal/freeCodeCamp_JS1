function dropElements(arr, func) {
    var newArr = []
    var j = 0, i = 0
    for (i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            j = i + 1
            newArr.push(arr[i])
            i = arr.length;
        }
    }
    if (newArr.length > 0) {
        while (j < arr.length) {
            newArr.push(arr[j])
            j++
        }
    }
    console.log(j)

    console.log(newArr)
    return newArr;
}

dropElements([1, 2, 3, 4], function (n) { return n > 5; })