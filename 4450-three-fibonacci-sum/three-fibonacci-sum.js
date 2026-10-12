/**
 * @param {number} n
 * @return {boolean}
 */
var threeFibonacciSum = function(n) {
    let a = 0;
    let b = 1;
    let c = 1;
    while(a+b+c<=n){
        if(a+b+c===n){
            return true;
        }
        let next = b +c;
        a = b;
        b = c;
        c = next;
    }
    return false;
};