export default function greatestel(vector) {
    let greatest = vector[0]
    for (var each of vector) {
        if (greatest < each) {
           greatest = each
        }
    }
    return greatest
}