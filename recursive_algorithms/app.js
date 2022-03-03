console.log("===== factorial computing =====");
// const factorial = function (n) {
//   let result = 1;

//   for (let i = 1; i <= n; ++i) {
//     result = result * i;
//   }

//   return result;
// };

// console.log("The value of 5! should be " + 5 * 4 * 3 * 2 * 1);
// console.log("The value of 5! is " + factorial(5));
// console.log("The value of 0! should be 1");
// console.log("The value of 0! is " + factorial(0));
// console.log("The value of 2! is " + factorial(2));
// console.log("The value of 3! is " + factorial(3));

const factorial = function (n) {
  // base case:
  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
};

console.log("The value of 5! is " + factorial(5) + ".");

console.log("===== memoized factorial =====");

const memo = {};
const memoizedFactorial = function (n) {
  if (n === 0) {
    return 1;
  } else if (memo.hasOwnProperty(n)) {
    return memo[n];
  } else {
    let result = memoizedFactorial(n - 1) * n;
    memo[n] = result;
    return result;
  }
};

console.log("memoizedFactorial: " + memoizedFactorial(5));

console.log("===== determine palindrome by recursion =====");
// ?	If the string is made of no letters or just one letter, then it is a palindrome.
// ?	Otherwise, compare the first and last letters of the string.
// ?	If the first and last letters differ, then the string is not a palindrome.
// ?	Otherwise, the first and last letters are the same. Strip them from the string, and determine whether the string that remains is a palindrome. Take the answer for this smaller string and use it as the answer for the original string.

// Returns the first character of the string str
const firstCharacter = function (str) {
  return str.slice(0, 1);
};

// Returns the last character of a string str
const lastCharacter = function (str) {
  return str.slice(-1);
};

// Returns the string that results from removing the first
//  and last characters from str
const middleCharacters = function (str) {
  return str.slice(1, -1);
};

const isPalindrome = function (str) {
  // base case #1
  if (str.length <= 1) return true;
  // base case #2
  if (firstCharacter(str) === lastCharacter(str))
    return isPalindrome(middleCharacters(str));
  // recursive case
  return false;
};

const checkPalindrome = function (str) {
  console.log("Is this word a palindrome? " + str);
  console.log(isPalindrome(str));
};

checkPalindrome(""); // true
checkPalindrome("a"); // true
checkPalindrome("motor"); // false
checkPalindrome("rotor"); // true

console.log("===== Recursive Powers =====");

const isEven = function (n) {
  return n % 2 === 0;
};

const isOdd = function (n) {
  return !isEven(n); // false의 반대(!)는 true
};

const power = function (x, n) {
  console.log("Computing " + x + " raised to power " + n + ".");
  // base case
  if (n === 0) {
    return 1;
  }
  // recursive case: n is negative
  if (n < 0) {
    return 1 / power(x, -n);
  }
  // recursive case: n is odd
  if (isOdd(n)) {
    return x * power(x, n - 1);
  }
  // recursive case: n is even
  if (isEven(n)) {
    const y = power(x, n / 2);
    return y * y;
  }
};

const displayPower = function (x, n) {
  console.log(x + " to the " + n + " is " + power(x, n));
};

displayPower(3, 0);
displayPower(3, 1);
displayPower(3, 2);
displayPower(3, -1);

console.log("===== fibonacci =====");

function iteratingFib(n) {
  if (n <= 1) return n;

  let twoBehind = 0;
  let oneBehind = 1;
  let result = 0;
  for (let i = 1; i < n; ++i) {
    result = twoBehind + oneBehind;
    twoBehind = oneBehind;
    oneBehind = result;
  }
  return result;
}

console.log("iteratingFib: " + iteratingFib(5));

const memoForFib = {};
const memoizedFib = function (n) {
  if (n === 0 || n === 1) {
    return n;
  } else if (memoForFib[n]) {
    return memoForFib[n];
  } else {
    let result = memoizedFib(n - 1) + memoizedFib(n - 2);
    memoForFib[n] = result;
    return result;
  }
};

console.log("memoizedFib: " + memoizedFib(5));
