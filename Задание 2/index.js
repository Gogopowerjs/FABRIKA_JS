// Задание 1

function isPowerOfTwo(n) {
    if (n === 1) {
        return true;
    }
    if (n < 1 || n > 1 && n < 2) {
        return false;
    }
    if (n > 1) {
        return isPowerOfTwo(n / 2);
    }
}


// Задание 2

var increment = function increment(n) {
    var obj = {
        value: 0,
        calls: 0
    };

    //счетчик
    //не понимаю как записать значение счетчика в переменную 
    function makeCounter() {
        var currentCount = 1;
        return function() {
            return currentCount++;
        };
    }
    var counter = makeCounter();
    obj.calls = counter(n);
    obj.value = n + 1;
    // возвращаю обьект 
    return obj;
};
