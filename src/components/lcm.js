function greatest(array) {
    return array.reduce(function (a, b) {
        return Math.max(a, b)
    })
}

function remain0(number, array, p=0) {
    if ((greatest(array) + p) % number == 0) {
        return true
    }
    else {
        return false
    }
}

function find_lcm(array, p=0) {
    return (array).every((each) => {
        return remain0(each, array, p)
    })
}

export default function attempts(array, p=0) {
    var lcm = 0
    while (find_lcm(array, p) == false) {
        lcm = greatest(array) + p
        p += 1
    }
    return lcm + 1
}