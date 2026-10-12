/**
 * @param {number} n
 * @param {number} s
 * @return {number[]}
 */
var maxPrimeSubset = function(n, s) {
    const isPrime = Array(n + 1).fill(true);
    if(n >= 0) isPrime[0] = false;
    if(n >= 1) isPrime[1] = false;
    for(let i =2; i * i <= n;i++){
        if(isPrime[i]){
            for(let j = i * i;j <= n;j += i){
                isPrime[j] = false;
            }
        }
    }
    const primes = [];
    for(let i =2;i <= n;i++){
        if(isPrime[i])
            primes.push(i);
    }
    const dp = Array(s + 1).fill(null);
    dp[0] = [];
    function lexSmaller(a,b){
        for(let i =0; i < a.length;i++){
            if(a[i] !== b[i]){
                return a[i] < b[i];
            }
        }
        return false;
    }
    for(const p of primes){
        for(let sum = s;sum >= p;sum--){
            if (dp[sum-p] === null) continue;
            let candidate = dp[sum - p].slice();
            candidate.push(p);
            if(dp[sum] === null){
                dp[sum] = candidate;
            }else{
                const cur = dp[sum];
                if(candidate.length < cur.length || (candidate.length === cur.length && lexSmaller(candidate, cur))){
                    dp[sum] = candidate;
                }
            }
        }
    }
    for(let sum = s;sum >= 1;sum--){
        if(dp[sum] !== null && dp[sum].length > 0){
            return dp[sum];
        }
    }
    return [];
};