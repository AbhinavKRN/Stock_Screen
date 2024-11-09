import React, { useState } from 'react';
import { ArrowsUpDownIcon } from '@heroicons/react/24/outline';

const PARAMETERS = [
  "Ticker",
  "Market Capitalization",
  "P/E Ratio",
  "ROE",
  "Debt-to-Equity Ratio",
  "Dividend Yield",
  "Revenue Growth",
  "EPS Growth",
  "Current Ratio",
  "Gross Margin"
];

const formatValue = (value, parameter) => {
  if (value === undefined || value === null) return '-';
  
  switch (parameter) {
    case 'Market Capitalization':
      return value.toFixed(2);
    case 'ROE':
    case 'Dividend Yield':
    case 'Revenue Growth':
    case 'EPS Growth':
    case 'Gross Margin':
      return `${value.toFixed(2)}%`;
    case 'P/E Ratio':
    case 'Debt-to-Equity Ratio':
    case 'Current Ratio':
      return value.toFixed(2);
    case 'Ticker':
      return value;
    default:
      return value.toString();
  }
};

const ResultsTable = ({ data, itemsPerPage = 10 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState('Market Capitalization');
  const [sortDirection, setSortDirection] = useState('desc');

  const sortedData = [...data].sort((a, b) => {
    const aVal = a[sortField];
    const bVal = b[sortField];
    
    if (aVal === undefined || bVal === undefined) return 0;
    
    const compareVal = aVal > bVal ? 1 : -1;
    return sortDirection === 'asc' ? compareVal : -compareVal;
  });

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = sortedData.slice(startIndex, startIndex + itemsPerPage);

  const handleSort = (field) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              {PARAMETERS.map((parameter) => (
                <th
                  key={parameter}
                  className="px-4 py-2 text-left text-sm font-medium text-gray-500 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSort(parameter)}
                >
                  <div className="flex items-center gap-1">
                    {parameter}
                    <ArrowsUpDownIcon className="h-4 w-4 text-gray-400" />
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((stock, index) => (
              <tr
                key={stock.Ticker || index}
                className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
              >
                {PARAMETERS.map((parameter) => (
                  <td key={parameter} className="px-4 py-2 text-sm">
                    {formatValue(stock[parameter], parameter)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="flex justify-between items-center px-4 py-3 bg-white border-t">
          <button
            className="px-3 py-1 rounded border disabled:opacity-50"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </button>
          <span className="text-sm text-gray-500">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="px-3 py-1 rounded border disabled:opacity-50"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ResultsTable;