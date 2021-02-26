/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    
    let x = [0];
    for(let i = 2; i < n; i++){
        for(let j = 2; j < n; j++){
            if(i%j === 0 && i !== j){
                x.push(i);
            }
            else{
                continue;
            }
        }
    }
    
};
