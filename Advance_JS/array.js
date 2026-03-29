// Important array functions:
// .map(cb(val, index, arr)) - transforms and return new array O(n)
// .filter(val, index, arr) - filters and return new array O(n)
// .reduce(cb(accumulator, currentValue, index, arr), initialValueOfAccumulator) - reduce to single value O(n)
// .flat(depth) - converts nested array to single level array upto given depth
// .flatMap(cb) - flattens and maps - depth = 1 only

//custom array:
const CustomArrayFns = {
    map: function(callback) {
        const convertedArr = [];
        for(const el of this){
            convertedArr.push(callback(el));
        }
        return convertedArr;
    },
    filter: function(callback) {
        const convertedArr = [];
        for(const el of this){
            if (callback(el)) convertedArr.push(el);
        }
        return convertedArr;
    },
    reduce: function(callback, initialValue) {
        let acc;
        let startIndex;
        if (initialValue !== undefined) {
            acc = initialValue;
            startIndex = 0;
        } else {
            if (this.length === 0) {
                throw new Error('Empty Array')
            }
            acc = this[0];
            startIndex = 1;
        }

        for (let i = startIndex; i < this.length; i++) {
            acc = callback(acc, this[i], i, this);
        }

        return acc;
    }
}

const myArr = [1,2,3,4,5,6,7,8];
Object.setPrototypeOf(CustomArrayFns, Array.prototype);
Object.setPrototypeOf(myArr, CustomArrayFns);
