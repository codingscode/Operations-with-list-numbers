function greatest(array) {
    return array.reduce(function (a, b) {
        return Math.max(a, b)
    })
}

function remain0(number, array, p) {
    if (number % (greatest(array) - p) == 0) {
        return true
    }
    else {
        return false
    }
}

function find_gcd(array, p) {
    return (array).every((each) => {
        return remain0(each, array, p)
    })
}

export default function attempts(array, p=0) {
    var gcd = 0
    while (find_gcd(array, p) == false) {
        gcd = greatest(array) - p
        p += 1
    }
    return gcd - 1
}
