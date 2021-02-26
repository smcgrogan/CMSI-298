/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let checker = s.length
    let anag = false;
    for(let i = 0; i <= t.length; i++){
        for(let j = 0; j <= s.length; j++){
            if(t[i] === s[j]){
                checker = checker -1;
            }
            else{
                continue;
            }
        }
    }
    if(checker <= 1){
        anag = true;
    }
    return anag
};
