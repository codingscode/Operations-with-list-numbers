export default function leastel(vector) {
    let least = vector[0]
    for (var each of vector) {
        if (least > each) {
           least = each
        }
    }
    return least
}