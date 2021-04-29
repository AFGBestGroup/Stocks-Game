/**
 * Displays a number, rounded to two decimal points.
 * @param num The number to display
 */
export function displayNumber(num) {
  return num.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
