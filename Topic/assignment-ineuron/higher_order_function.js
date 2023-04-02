
// Above code show us about even odd statments

let arr = [1, 2, 3, 4, 5, 6];

const filter_element = (condition) => {
    let size = arr.length;
    let filter_arr = []
    for (let ind = 0; ind < size; ind++) {
        if (condition(arr[ind])) {
            filter_arr.push(arr[ind]);
        }
    }
    return filter_arr;
}

let odd_ele = (num) => {
    return num & 1;
}

let even_ele = (num) => {
    if (num & 1) {
        return 0;
    }
    return 1;
}
console.log(filter_element(odd_ele));