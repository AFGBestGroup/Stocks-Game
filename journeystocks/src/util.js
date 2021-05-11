/**
 * Displays a number, rounded to two decimal points.
 * @param num The number to display
 */

import state from './state';
export function displayNumber(num) {
  return num.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function calcPortValue() {
  let totalStockValue = 0;
  for (var [_, s] of Object.entries(state.stocks)) {
    totalStockValue += s.cost * s.shares;
  }
  return state.bank.balance + totalStockValue;
}
