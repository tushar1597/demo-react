for (var i = 0; i < 3; i++) {
    setTimeout(function () {
        alert(i);
    }, 1000 + i);
}

let a = (b = 5);
var a = (b = 5);
console.log(a, b);
