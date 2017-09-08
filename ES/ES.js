//Arrow functions
let evens = [2,4,6,8,10,12,14,16,18,20];

pairs = evens.map(v => ({even: v, odd: v + 1}));
nums = evens.map((v, i) => v + i);

odds = evens.map(v => {
    return v+1
});

odds.forEach(function(element) {
    console.log(element)
}, this);

//Block scope
for (let i = 0; i < a.length; i++) {
    let x = a[i];
};
for (let i = 0; i < b.length; i++) {
    let y = b[i];
};

let callbacks = [];
for (let i = 0; i <= 2; i++) {
    callbacks[i] = function () { return i * 2 };
};
callbacks[0]() === 0;
callbacks[1]() === 2;
callbacks[2]() === 4;

{
    function foo () { return 1 };
    foo() === 1;
    {
        function foo () { return 2 };
        foo() === 2;
    };
    foo() === 1;
};

(function () {
    var foo = function () { return 1; };
    foo() === 1;
    (function () {
        var foo = function () { return 2; };
        foo() === 2;
    })();
    foo() === 1;
})();

//Constants
const PI = 3.141593;
PI > 3.0;

Object.defineProperty(typeof global === "object" ? global : window, "PI", {
    value:        3.141593,
    enumerable:   true,
    writable:     false,
    configurable: false
});
PI > 3.0;