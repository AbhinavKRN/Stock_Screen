/**
 * Formats number as currency in billions
 * @param {number} value - Value to format
 * @returns {string} - Formatted string
 */
export const formatMarketCap = (value) => {
    const inBillions = value / 1000;
    return `${inBillions.toFixed(2)}B`;
  };
  
  /**
   * Formats number as percentage
   * @param {number} value - Value to format
   * @param {number} decimals - Number of decimal places
   * @returns {string} - Formatted string
   */
  export const formatPercentage = (value, decimals = 2) => {
    return `${value.toFixed(decimals)}%`;
  };
  
  /**
   * Formats number with fixed decimal places
   * @param {number} value - Value to format
   * @param {number} decimals - Number of decimal places
   * @returns {string} - Formatted string
   */
  export const formatNumber = (value, decimals = 2) => {
    return value.toFixed(decimals);
  };
  
  /**
   * Format value based on parameter type
   * @param {number} value - Value to format
   * @param {string} parameter - Parameter name
   * @returns {string} - Formatted string
   */
  export const formatValue = (value, parameter) => {
    switch (parameter) {
      case 'marketCap':
        return formatMarketCap(value);
      case 'roe':
      case 'dividendYield':
      case 'revenueGrowth':
      case 'epsGrowth':
      case 'grossMargin':
        return formatPercentage(value);
      case 'peRatio':
      case 'debtToEquity':
      case 'currentRatio':
        return formatNumber(value);
      default:
        return value.toString();
    }
  };
  
  /**
   * Creates a display string for a filter condition
   * @param {Object} condition - Filter condition
   * @returns {string} - Formatted condition string
   */
  export const formatCondition = (condition) => {
    const { parameter, operator, value } = condition;
    const formattedValue = formatValue(value, parameter);
    return `${parameter} ${operator} ${formattedValue}`;
  };
  
  /**
   * Formats large numbers with K, M, B suffixes
   * @param {number} value - Value to format
   * @returns {string} - Formatted string
   */
  export const formatLargeNumber = (value) => {
    if (value >= 1e9) {
      return `${(value / 1e9).toFixed(2)}B`;
    }
    if (value >= 1e6) {
      return `${(value / 1e6).toFixed(2)}M`;
    }
    if (value >= 1e3) {
      return `${(value / 1e3).toFixed(2)}K`;
    }
    return value.toFixed(2);
  };