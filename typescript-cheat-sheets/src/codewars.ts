function buddy(start: number, limit: number): number[] {
  // Function to calculate the sum of divisors for a given number
  function getSumOfDivisors(n: number): number {
    let sum = 1;
    const sqrt = Math.sqrt(n);
    for (let i = 2; i <= sqrt; i++) {
      if (n % i === 0) {
        // Add the divisor and its corresponding divisor to the sum
        sum += i;
        const divisor = n / i;
        if (divisor !== i) {
          sum += divisor;
        }
      }
    }
    return sum;
  }

  let output: number[] = [];
  for (let i = start; i <= limit; i++) {
    // Calculate the sum of divisors for the current number (i)
    const sumOfN = getSumOfDivisors(i);
    // Calculate the sum of divisors for (sumOfN - 1)
    const sumOfM = getSumOfDivisors(sumOfN - 1);
    if (sumOfM === i + 1 && sumOfN - 1 > i) {
      // Found a buddy pair, return it as an array
      return (output = [i, sumOfN - 1]);
    }
  }
  // No buddy pairs found, return an empty array
  return output;
}

function isInteresting(n: number, awesomePhrases: number[]): number {
  // CODE HERE
  console.log("n:", n, "phrases:", awesomePhrases);
  if (awesomePhrases) {
    if (awesomePhrases[0] === n || awesomePhrases[1] === n) {
      return 2;
    }
    if (
      n + 2 === awesomePhrases[0] ||
      n + 2 === awesomePhrases[1] ||
      n + 1 === awesomePhrases[0] ||
      n + 1 === awesomePhrases[1]
    ) {
      return 1;
    }
  }
  if (n < 10) {
    return 0;
  }

  for (let i = 0; i <= 2; i++) {
    if (
      isAllZeroes(n + i) ||
      isSameNumber(n + i) ||
      isIncrementing(n + i) ||
      isDecrementing(n + i) ||
      isPalindrome(n + i)
    ) {
      if (i === 0) {
        return 2;
      } else if (i === 1 || i === 2) {
        return 1;
      }
    }
  }

  function isAllZeroes(n: number): boolean {
    if (n < 100) {
      return false;
    }
    if (n.toString().match(/^\d0*$/)) {
      return true;
    }
    return false;
  }
  function isSameNumber(n: number): boolean {
    //     if (n.toString().match(/^(\d)\1*$/)) {
    //       return true
    //     }
    if (n < 100) {
      return false;
    }
    return new Set([...n.toString()]).size === 1;
  }
  function isIncrementing(n: number): boolean {
    //     return `01234567890`.includes(n.toString())
    if (n < 100) {
      return false;
    }
    const nStr = n.toString();
    for (let i = 0; i < nStr.length - 1; i++) {
      if (i === nStr.length - 2) {
        if (nStr[i] === "9") {
          return nStr[i + 1] === "0";
        }
      }
      if (Number(nStr[i + 1]) - Number(nStr[i]) !== 1) {
        return false;
      }
    }
    return true;
  }
  function isDecrementing(n: number): boolean {
    //     return `9876543210`.includes(n.toString())
    if (n < 100) {
      return false;
    }
    const nStr = n.toString();
    for (let i = 0; i < nStr.length - 1; i++) {
      if (Number(nStr[i]) - Number(nStr[i + 1]) !== 1) {
        return false;
      }
    }
    return true;
  }
  function isPalindrome(n: number): boolean {
    if (n < 100) {
      return false;
    }
    const nStr = n.toString();

    if (nStr.split("").reverse().join("") === nStr) {
      return true;
    }
    return false;
  }

  return 0;
}
