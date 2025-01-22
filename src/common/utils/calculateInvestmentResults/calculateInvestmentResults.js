/**
 * The function to calculate investment results
 * based on parameters listed below
 *
 * @param initialInvestment {number} - The initial investment amount
 * @param annualInvestment {number} - The amount invested every year
 * @param expectedReturn {number} - The expected (annual) rate of return
 * @param duration {number} - The investment duration (time frame)
 *
 * @returns annualData {[]} - The array of objects with the investment results
 */
export function calculateInvestmentResults(
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
) {
  const annualData = [];
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    annualData.push({
      year: i + 1, // year identifier
      interest: interestEarnedInYear, // the amount of interest earned in this year
      valueEndOfYear: investmentValue, // investment value at end of year
      annualInvestment: annualInvestment, // investment added in this year
    });
  }

  return annualData;
}

// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "$1,000"
export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
