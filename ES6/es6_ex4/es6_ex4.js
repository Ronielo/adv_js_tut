// Template strings Tag functions + Template strings
function upper(strings,...values) {
    let fixedString = ""
    for(let i = 0; i < strings.length; i++) {
        if (i > 0) {
            fixedString += values[i - 1].toUpperCase();
        }
        fixedString += strings[i];
        console.log(fixedString);
    }
    return fixedString;
}

var name = "kyle",
    twitter = "getify",
    classname = "es6 workshop";

console.log(
    upper`Hello ${name} (@${twitter}), welcome to the ${classname}!` ===
    "Hello KYLE (@GETIFY), welcome to the ES6 WORKSHOP!"
);
