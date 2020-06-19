console.log("1");

setTimeout(function timeout() {
    console.log("2");
}, 0);

setTimeout(function timeout() {
    console.log("3");
}, 5000);

console.log("4");