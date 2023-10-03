var join = function (arr1, arr2) {

    arr1.sort((a, b) => a.id - b.id)
    arr2.sort((a, b) => a.id - b.id)

    // Tow pointer 
    let res = []
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i].id < arr2[j].id) {
            res.push(arr1[i])
            i++;
        }
        else if (arr1[i].id > arr2[j].id) {
            res.push(arr2[j])
            j++;
        }
        else {
            res.push({ ...arr1[i], ...arr2[j] })
            i++;
            j++
        }
    }
    if (i < arr1.length) {
        while (i < arr1.length) {
            res.push(arr1[i])
            i++;
        }
    }

    if (j < arr2.length) {
        while (j < arr2.length) {
            res.push(arr2[j])
            j++;
        }
    }
    return res
}