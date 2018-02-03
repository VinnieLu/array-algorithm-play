// ### Check if input string is palindrome
  // Implement this task both way (recursion and iterative way)

function isPalindromeIterative(str) {
  for (var i = 0; i < (Math.ceil(str.length / 2) - 1); i++) {
    if (str[i] != str[str.length - (i + 1)]) {
      return false
    }
  }
  return true
}

function isPalindromeRecursive(str, i = 0) {
  if (i > (Math.ceil(str.length / 2) - 1)) {
    return true
  } else if (str[i] === str[str.length - (i + 1)]) {
    isPalindromeRecursive(str, i + 1)
  } else {
    return false
  }
}



// ### Two sum problem
// The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.Please note that your returned answers (both index1 and index2) are not zero-based.

//   Input:

//     `[3,5,2,-4,8,11], target=7`

//   Output:

//     `[[2, 3], [4, -6]]`

function twoSum(arr, target) {
  var final = []
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        final.push([i + 1, j + 1])
      }
    }
  }
  return final
}



// ##Arrays

// ### Given a binary string, count number of substrings that start and end with 1
// Given a binary string, count number of substrings that start and end with 1.
// Example
//   Input:

//     `“00100101”`

//   Output:

//     `3 ( “1001”, “100101” and “101”)`

function countSubstrings(str) {
  var count = 0
  for (var i = 0; i < str.length; i++) {
    if (str[i] === "1") {
      count++
    }
  }
  return count
}

console.log(countSubstrings("00100101"))
console.log(countSubstrings("010101010101"))
console.log(countSubstrings("011011011011"))




// ### K-th Smallest/Largest Element in Unsorted Array
//   Given array of unsorted elements and index of element. Find k-th smallest and largest element.

function sortNumber(a, b) {
  return a - b
}

function smallestLargest(arr, k) {
  return arr.sort(sortNumber)[k - 1]
}



// ### Check if two given strings are isomorphic to each other
// Two strings str1 and str2 are called isomorphic if there is a one to one mapping possible for every character of str1 to every character of str2. And all occurrences of every character in ‘str1′ map to same character in ‘str2′

//   Input:

//    `str1 = "aab",
//     str2 = "xxy"`
//   Output:

//    `True ('a' is mapped to 'x' and 'b' is mapped to 'y')`

//   Input:  

//     `str1 = "aab",
//      str2 = "xyz"`  

//   Output:

//    `False (One occurrence of 'a' in str1 has 'x' in str2 and other occurrence of 'a' has 'y')`

function isomorphic(str1, str2) {
  if (str1.length != str2.length) {
    return false
  }
  var map = {}
  for (var i = 0; i < str1.length; i++) {
    if (typeof (map[str1[i]]) != "undefined") {
      if (map[str1[i]] != str2[i]) {
        return false
      }
    } else {
      map[str1[i]] = str2[i]
    }
  }
  return true
}



// ### Subsets problems
// Given a set of distinct integers, return all possible subsets.
// Elements in a subset must be in non-descending order. The solution set must not contain duplicate subsets.

//   Input:

//     `[1,2,3]`

//   Output:

//     `[[3],[1],[2],[1,2,3],[1,3],[2,3],[1,2]]`


//NOT SOLVED
function distinct(arr) {
  var final = []
  for (var i = 0; i < arr.length; i++) {
    final.push([i])
    var subarray = [i]
    for (var j = i + 1; j < arr.length; j++) {
      subarray.push[j]
      final.push[subarray]
    }
  }
  return final
}