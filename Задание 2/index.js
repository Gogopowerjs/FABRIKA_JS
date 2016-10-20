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

var increment = (function makeCounter() {
  var currentCount = 1;
  return function(n){
    return {
      value: n+1,
      calls: currentCount++,
    };
  };
})();
