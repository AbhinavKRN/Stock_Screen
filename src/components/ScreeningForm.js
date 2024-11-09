import React, { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';

const PARAMETERS = {
  "Market Capitalization": "Market Capitalization",
  "P/E Ratio": "P/E Ratio",
  "ROE": "ROE",
  "Debt-to-Equity Ratio": "Debt-to-Equity Ratio",
  "Dividend Yield": "Dividend Yield",
  "Revenue Growth": "Revenue Growth",
  "EPS Growth": "EPS Growth",
  "Current Ratio": "Current Ratio",
  "Gross Margin": "Gross Margin"
};

const OPERATORS = [
  { value: '>', label: '>' },
  { value: '<', label: '<' },
  { value: '=', label: '=' },
  { value: '>=', label: '>=' },
  { value: '<=', label: '<=' }
];

const ScreeningForm = ({ onSearch }) => {
  const [conditions, setConditions] = useState([{
    parameter: "Market Capitalization",
    operator: '>',
    value: 0
  }]);

  const handleAddCondition = () => {
    setConditions([...conditions, {
      parameter: "Market Capitalization",
      operator: '>',
      value: 0
    }]);
  };

  const handleSearch = () => {
    onSearch(conditions);
  };

  const handleConditionChange = (index, field, value) => {
    const newConditions = [...conditions];
    newConditions[index] = {
      ...newConditions[index],
      [field]: field === 'value' ? parseFloat(value) || 0 : value
    };
    setConditions(newConditions);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-6">Create New Screen</h2>
      <div className="space-y-4">
        {conditions.map((condition, index) => (
          <div key={index} className="flex items-center gap-4">
            <select
              className="flex-1 p-2 border rounded-md"
              value={condition.parameter}
              onChange={(e) => handleConditionChange(index, 'parameter', e.target.value)}
            >
              {Object.entries(PARAMETERS).map(([key, label]) => (
                <option key={key} value={key}>{label}</option>
              ))}
            </select>
            
            <select
              className="w-24 p-2 border rounded-md"
              value={condition.operator}
              onChange={(e) => handleConditionChange(index, 'operator', e.target.value)}
            >
              {OPERATORS.map((op) => (
                <option key={op.value} value={op.value}>{op.label}</option>
              ))}
            </select>
            
            <input
              type="number"
              className="w-32 p-2 border rounded-md"
              value={condition.value}
              onChange={(e) => handleConditionChange(index, 'value', e.target.value)}
            />
            
            <button
              onClick={handleAddCondition}
              className="text-blue-600 hover:text-blue-700 flex items-center gap-1"
            >
              <PlusIcon className="h-5 w-5" />
              <span>AND</span>
            </button>
          </div>
        ))}
      </div>
      
      <button
        onClick={handleSearch}
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Search
      </button>
    </div>
  );
};

export default ScreeningForm;