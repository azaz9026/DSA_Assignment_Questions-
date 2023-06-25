
// Q.1 ----------------------------------------------------------------------------------------------------------

function findCommonElements(arr1, arr2, arr3) {
    let ptr1 = 0;
    let ptr2 = 0;
    let ptr3 = 0;
    const result = [];
  
    while (ptr1 < arr1.length && ptr2 < arr2.length && ptr3 < arr3.length) {
      if (arr1[ptr1] === arr2[ptr2] && arr2[ptr2] === arr3[ptr3]) {
        result.push(arr1[ptr1]);
        ptr1++;
        ptr2++;
        ptr3++;
      } else {
        const minValue = Math.min(arr1[ptr1], arr2[ptr2], arr3[ptr3]);
        if (arr1[ptr1] === minValue) {
          ptr1++;
        }
        if (arr2[ptr2] === minValue) {
          ptr2++;
        }
        if (arr3[ptr3] === minValue) {
          ptr3++;
        }
      }
    }
  
    return result;
  }
  
  // Example usage:
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [1, 2, 5, 7, 9];
  const arr3 = [1, 3, 4, 5, 8];
  
  console.log(findCommonElements(arr1, arr2, arr3));

  

  // Q.2 ----------------------------------------------------------------------------------------------------------



  function findDistinctElements(nums1, nums2) {
    const distinctNums1 = [];
    const distinctNums2 = [];
  
    const setNums1 = new Set(nums1);
    const setNums2 = new Set(nums2);
  
    for (const num of nums1) {
      if (!setNums2.has(num)) {
        distinctNums1.push(num);
      }
    }
  
    for (const num of nums2) {
      if (!setNums1.has(num)) {
        distinctNums2.push(num);
      }
    }
  
    return [distinctNums1, distinctNums2];
  }
  
  // Example usage:
  const nums1 = [1, 2, 3];
  const nums2 = [2, 4, 6];
  
  console.log(findDistinctElements(nums1, nums2));
  


  // Q.3  ----------------------------------------------------------------------------------------------------------


  function transposeMatrix(matrix) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;
  
    const transposedMatrix = [];
  
    for (let j = 0; j < numCols; j++) {
      const newRow = [];
      for (let i = 0; i < numRows; i++) {
        newRow.push(matrix[i][j]);
      }
      transposedMatrix.push(newRow);
    }
  
    return transposedMatrix;
  }
  
  // Example usage:
  const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  
  console.log(transposeMatrix(matrix));
  

  
    // Q.4  ----------------------------------------------------------------------------------------------------------

    function arrayPairSum(nums) {
        nums.sort((a, b) => a - b); // Sort the array in ascending order
      
        let sum = 0;
        for (let i = 0; i < nums.length; i += 2) {
          sum += nums[i]; // Add the minimum value in each pair to the sum
        }
      
        return sum;
      }
      
      // Example usage:
      const nums = [1, 4, 3, 2];
      
      console.log(arrayPairSum(nums));



    // Q.5  ----------------------------------------------------------------------------------------------------------

    function arrangeCoins(n) {
        let left = 0;
        let right = n;
      
        while (left <= right) {
          const mid = Math.floor((left + right) / 2);
          const curr = (mid * (mid + 1)) / 2;
      
          if (curr === n) {
            return mid;
          } else if (curr < n) {
            left = mid + 1;
          } else {
            right = mid - 1;
          }
        }
      
        return right;
      }
      


// Q.6  ----------------------------------------------------------------------------------------------------------

function sortedSquares(nums) {
    const squaredNums = numss.map((num) => num * num);
    squaredNums.sort((a, b) => a - b);
    return squaredNums;
  }
  
  // Example usage:
  const numss = [-4, -1, 0, 3, 10];
  console.log(sortedSquares(numss));
  

// Q.7  ----------------------------------------------------------------------------------------------------------

  function maxCount(m, n, ops) {
    let minRow = m;
    let minCol = n;
  
    for (const [row, col] of ops) {
      minRow = Math.min(minRow, row);
      minCol = Math.min(minCol, col);
    }
  
    return minRow * minCol;
  }
  
  // Example usage:
  const m = 3;
  const n = 3;
  const ops = [[2, 2], [3, 3]];
  console.log(maxCount(m, n, ops));
  
// Q.8  ----------------------------------------------------------------------------------------------------------

  function shuffle(nums, n) {
    const result = [];
    for (let i = 0; i < n; i++) {
      result.push(nums[i]);
      result.push(nums[i + n]);
    }
    return result;
  }
  
  // Example usage:
  const num = [2, 5, 1, 3, 4, 7];
  const ns = 3;
  console.log(shuffle(num, ns));
  
