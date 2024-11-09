

import React, { useState } from 'react';
import ScreeningForm from './components/ScreeningForm';
import ResultsTable from './components/ResultsTable';
import { stocks } from './data/stocks';
import { filterStocks, sortStocks, paginateStocks } from './utils/filterStocks';
import { formatValue } from './utils/formatters';

function App() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = (conditions) => {
    setLoading(true);
    try {
      // Filter stocks based on conditions
      const filteredStocks = filterStocks(stocks, conditions);
      setResults(filteredStocks);
    } catch (error) {
      console.error('Error filtering stocks:', error);
      // You might want to add error handling UI here
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold mb-8">Stock Screener</h1>
        <div className="space-y-6">
          <ScreeningForm onSearch={handleSearch} />
          
          {loading && (
            <div className="text-center py-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            </div>
          )}
          
          {!loading && results.length > 0 && (
            <ResultsTable data={results} />
          )}
          
          {!loading && results.length === 0 && (
            <div className="text-center py-4 text-gray-500">
              No stocks match your criteria
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;