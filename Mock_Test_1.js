
// Q.1 ===================================================================================================================

function move_Zeroes(arr){

    let nonzeroele = 0;
    for(let i = 0; i <arr.length; i++){
        if(arr[i] !== 0 ){
            arr[nonzeroele] = arr[i];
            nonzeroele++;
        }
    }
    for(let i = nonzeroele; i<arr.length; i++){
        arr[i]=0;
    }
    return arr;
}

let res = move_Zeroes([0,1,0,3,12])
console.log(res)



// Q.2 =========================================================================================================================
    
function firstUniqChar(s) {
    const charCount = {};
  
    // Count the occurrences of each character
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    // Find the first non-repeating character
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (charCount[char] === 1) {
        return i;
      }
    }
  
    return -1; // If no non-repeating character found
  }

  console.log(firstUniqChar("leetcode"));       
console.log(firstUniqChar("loveleetcode"));    
console.log(firstUniqChar("aabb"));            
