// Block scope + Arrow function
const x = 2;
var fns = [];

(function(){
    const x = 5;

    for (let i=0; i<x; i++) {
        fns[i] = () => {
            return i;
        }
    }
})();

console.log((x * 2) === fns[x * 2]());