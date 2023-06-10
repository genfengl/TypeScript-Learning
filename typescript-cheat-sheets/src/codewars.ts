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
      return output = [i, sumOfN - 1];
    }
  }
  // No buddy pairs found, return an empty array
  return output;
}
