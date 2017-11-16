const aa = [1, 2, 3];
const bb = [1, 2, 3];
const cc = [1, 3, 2];
const dd = [4, 5, 6];

function findCountOfSameElementsWithSamePosition(aa, bb) {
    let count = 0;
    for (let i = 0; i < aa.length; i++) {
        if (aa[i] === bb[i]) {
            count += 1;
        }
    }
    return count;
}

console.log(findCountOfSameElementsWithSamePosition(aa, bb)); // 3
console.log(findCountOfSameElementsWithSamePosition(aa, cc)); // 1
console.log(findCountOfSameElementsWithSamePosition(aa, dd)); // 0