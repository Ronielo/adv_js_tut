const numbers = {
    *[Symbol.iterator]({start = 0, inc = 1, end = 100} = {}) {
        for(let i = start; i <= end; i += inc) {
            yield i;
        }
    }
};

// should print 0..100 by 1s
for (let num of numbers) {
    console.log(num);
}

// should print 6..30 by 4s
for (let num of numbers[Symbol.iterator]({
    start: 4,
    inc: 2,
    end: 10
})) {
    console.log(num);
}
