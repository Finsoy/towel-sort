// You should implement your task here.

module.exports = function towelSort(matrix) {
    let array = [];
    if (matrix) {
        for (let iterator of matrix) {
            indexIterator = matrix.indexOf(iterator);

            if (indexIterator % 2 === 0 || indexIterator === 0) {
                for (let i of iterator) {
                    array.push(i);
                }
            } else {
                for (let j = iterator.length - 1; j >= 0; j--) {
                    array.push(iterator[j]);
                }
            }
        }
    } else return [];
    console.log(array);
    return array;
};
