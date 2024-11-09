
export const filterStocks = (stocks, conditions) => {
    if (!conditions || conditions.length === 0) return stocks;
  
    return stocks.filter(stock => {
      return conditions.every(condition => {
        const stockValue = stock[condition.parameter];
        const filterValue = condition.value;
  
        if (stockValue === undefined || filterValue === undefined) return false;
  
        switch (condition.operator) {
          case '>':
            return stockValue > filterValue;
          case '<':
            return stockValue < filterValue;
          case '=':
            return Math.abs(stockValue - filterValue) < 0.0001;
          case '>=':
            return stockValue >= filterValue;
          case '<=':
            return stockValue <= filterValue;
          default:
            return false;
        }
      });
    });
  };
  
  export const sortStocks = (stocks, field, direction = 'asc') => {
    return [...stocks].sort((a, b) => {
      const aVal = a[field];
      const bVal = b[field];
      
      if (direction === 'asc') {
        return aVal - bVal;
      }
      return bVal - aVal;
    });
  };
  
  export const paginateStocks = (stocks, page, itemsPerPage) => {
    const startIndex = (page - 1) * itemsPerPage;
    return stocks.slice(startIndex, startIndex + itemsPerPage);
  };