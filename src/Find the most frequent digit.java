// problem link https://www.geeksforgeeks.org/problems/find-the-most-frequent-digit4432/1

// solution 

class Solution {
    String solve(String N) {
        // code here
        HashMap<Character, Integer> hash = new HashMap<>();
        for(char x:N.toCharArray()){
            hash.put(x, hash.getOrDefault(x,0)+1);
        }
        int max=0, ans=0;
        for(char n:hash.keySet()){
            if(hash.get(n)>=max){
                max = hash.get(n);
                ans = Math.max(ans, n-'0');
            }
        }
        return String.valueOf(ans);
    }
}