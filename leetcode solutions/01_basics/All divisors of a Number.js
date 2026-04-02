class Solution {
    // Function to print all the divisors of the given number.
    print_divisors(n) {
        // code here
        let divisors = [];
        let sq_root = Math.floor(Math.sqrt(n))
        for(let i=1; i<=sq_root; i++){
            if(n%i==0){
                divisors.push(i)
                if(n/i !== i){
                    divisors.push(n/i)
                }
            }
        }
        divisors.sort(function(a, b) { return a-b})
        process.stdout.write(divisors.join(" "))
    }
}