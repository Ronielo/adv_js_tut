function foo(x, i1, i2, ...args) {
    console.log([x, ...args]);
    return [x, ...args];
}

function bar() {
    let a1 = [ 2, 4 ];
    let a2 = [ 6, 8, 10, 12 ];

    return foo(...a1, ...a2);
}

console.log(
    bar().join("") === "281012"
);
