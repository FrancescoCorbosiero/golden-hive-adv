export function formatCurrency(amount, options = {}) {
  const { decimals = 0, showSymbol = true } = options;

  const formatted = new Intl.NumberFormat('it-IT', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(amount);

  return showSymbol ? `€${formatted}` : formatted;
}

export function formatNumber(num) {
  return new Intl.NumberFormat('it-IT').format(num);
}

export function formatPercentage(num, decimals = 0) {
  return `${num.toFixed(decimals)}%`;
}
