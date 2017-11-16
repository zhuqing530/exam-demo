const aa = [1, 2, 3];
const bb = [3, 1, 2];
const cc = [3, 4, 1, 7];
const dd = [2, 2, 3, 3];

function findSameElements(aa, bb) {
    function _contains(array, element) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === element) {
                return true;
            }
        }
        return false;
    }

    function _removeDuplicatedElements(array) {
        const result = [];
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            if (_contains(result, element)) {

            } else {
                result.push(element);
            }
        }
        return result;
    }

    const newBb = _removeDuplicatedElements(bb);
    const result = [];
    for (let i = 0; i < newBb.length; i++) {
        const b = newBb[i];
        if (_contains(aa, b)) {
            result.push(b);
        }
    }
    return result;
}

console.log(findSameElements(aa, bb)); // [1,2,3]
console.log(findSameElements(aa, cc)); // [1,3]
console.log(findSameElements(aa, dd)); // [2,3]
