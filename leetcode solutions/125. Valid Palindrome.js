/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let rev = s.toLowerCase().replaceAll(/[^a-z0-9]/gi, "")
    let first = 0
    let last = rev.length-1
    function rec(first, last, rev){
        if(first>=last) return true 
        if(rev.charAt(first) !== rev.charAt(last)) return false
        return rec(first+1, last-1, rev)
    }
    return rec(first,last,rev)
};