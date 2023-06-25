//Q.1 ======================================================================================================

function convertTo2DArray(original, m, n) {
    if (original.length !== m * n) {
      return [];
    }
  
    let result = [];
    for (let i = 0; i < m; i++) {
      result.push(original.slice(i * n, (i + 1) * n));
    }
  
    return result;
  }
  let original = [1, 2, 3, 4, 5, 6];
  let m = 2;
  let n = 3;
  
  let result = convertTo2DArray(original, m, n);
  console.log(result);
    


  //Q.2 ======================================================================================================

  function numberOfCompleteRows(num) {
    let k = 1;
    while (k * (k + 1) / 2 <= num) {
      k++;
    }
    return k - 1;
  }
  let num = 10;
let result1 = numberOfCompleteRows(n);
console.log(result1);


//Q.3 ======================================================================================================

function sortedSquares(nums) {
    const result = [];
    
    for (let i = 0; i < nums.length; i++) {
      const square = nums[i] * nums[i];
      result.push(square);
    }
    
    result.sort((a, b) => a - b);
    
    return result;
  }
  const nums = [-4, -1, 0, 3, 10];
  const result2 = sortedSquares(nums);
  console.log(result2);
    


//Q.4 ======================================================================================================

function findDisjointElements(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    
    const result1 = [];
    const result2 = [];
    
    for (const num of set1) {
      if (!set2.has(num)) {
        result1.push(num);
      }
    }
    
    for (const num of set2) {
      if (!set1.has(num)) {
        result2.push(num);
      }
    }
    
    return [result1, result2];
  }
  const nums1 = [1, 2, 3];
const nums2 = [2, 4, 6];
const result3 = findDisjointElements(nums1, nums2);
console.log(result3);



//Q.5 ======================================================================================================

function findDistanceValue(arr1, arr2, d) {
    let distance = 0;
    
    for (let i = 0; i < arr1.length; i++) {
      let found = false;
      
      for (let j = 0; j < arr2.length; j++) {
        if (Math.abs(arr1[i] - arr2[j]) <= d) {
          found = true;
          break;
        }
      }
      
      if (!found) {
        distance++;
      }
    }
    
    return distance;
  }
  const arr1 = [4, 5, 8];
  const arr2 = [10, 9, 1, 8];
  const d = 2;
  const result4 = findDistanceValue(arr1, arr2, d);
  console.log(result4);
    


  
//Q.6 ======================================================================================================


function findDuplicates(nums) {
    const result = [];
  
    for (let i = 0; i < nums.length; i++) {
      const num = Math.abs(nums[i]);
      
      if (nums[num - 1] > 0) {
        nums[num - 1] *= -1;
      } else {
        result.push(num);
      }
    }
  
    return result;
  }
  const nums = [4, 3, 2, 7, 8, 2, 3, 1];
const result = findDuplicates(nums);
console.log(result);


//Q.7 ======================================================================================================


function findMin(nums) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
  
      if (nums[mid] > nums[right]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
  
    return nums[left];
  }
  const nums = [3, 4, 5, 1, 2];
  const result = findMin(nums);
  console.log(result);


 //Q.8 ====================================================================================================== 
    

 function findOriginalArray(changed) {
    if (changed.length % 2 !== 0) {
      return [];
    }
  
    const originalSet = new Set(changed);
    const result = [];
  
    for (let num of changed) {
      if (!originalSet.has(num)) {
        continue;
      }
  
      originalSet.delete(num);
  
      const originalNum = num / 2;
      if (!originalSet.has(originalNum)) {
        return [];
      }
  
      originalSet.delete(originalNum);
      result.push(originalNum);
    }
  
    return result;
  }

  const changed = [1, 3, 4, 2, 6, 8];
const result5 = findOriginalArray(changed);
console.log(result5);

  
