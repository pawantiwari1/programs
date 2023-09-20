// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// For even-even and odd-odd pairs, or if both are even or both are odd, maintain order
const numbersArray = [9, 4, 7, 2, 1, 8, 5, 6];

numbersArray.sort((a, b) => {
  // Compare even and odd numbers
  if (a % 2 === 0 && b % 2 !== 0) {
    return -1; // a comes before b
  } else if (a % 2 !== 0 && b % 2 === 0) {
    return 1; // b comes before a
  }

  // console.log(a-b);
  return a - b;
});

console.log(numbersArray);

//Anagaram  2 string (after swiping char )
function areAnagrams(str1, str2) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr1 = str1.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const cleanStr2 = str2.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Check if the cleaned strings have the same characters
  if (cleanStr1.length !== cleanStr2.length) {
    return false;
  }

  const charCount = {};

  // Count characters in the first string
  for (let char of cleanStr1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  console.log('char count ', charCount);
  // Subtract characters from the count for the second string
  for (let char of cleanStr2) {
    if (!charCount[char]) {
      return false; // Character not found in the first string
    }
    charCount[char]--;
  }

  // If all characters have been matched and subtracted to zero
  return true;
}

const word1 = 'liisten';
const word2 = 'siilent';

if (areAnagrams(word1, word2)) {
  console.log(`${word1} and ${word2} are anagrams.`);
} else {
  console.log(`${word1} and ${word2} are not anagrams.`);
}

// Anagram  number

function areAnagramNumbers(num1, num2) {
  const str1 = num1.toString();
  const str2 = num2.toString();

  if (str1.length !== str2.length) {
    return false;
  }

  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');

  return sortedStr1 === sortedStr2;
}

const number1 = 123;
const number2 = 321;

if (areAnagramNumbers(number1, number2)) {
  console.log(`${number1} and ${number2} are anagram numbers.`);
} else {
  console.log(`${number1} and ${number2} are not anagram numbers.`);
}

function countAllLetter(str) {
  const charCount = {};
  // Count characters in the  string
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  console.log('char count ', charCount);
}
countAllLetter('rajan');

function sortNumberwith012(nums) {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;
  while (mid <= high) {
    if (nums[mid] == 0) {
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] == 1) {
      mid++;
    } else if (nums[mid] == 2) {
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
    console.log('sorted ', nums);
    //return nums;
  }
  return -1;
}

const ar = [1, 2, 0, 2, 1];
sortNumberwith012(ar);
console.log(ar);
