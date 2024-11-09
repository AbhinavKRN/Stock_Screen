# Stock Screener

A web-based stock screening tool inspired by Screener.in that allows users to filter and view stocks based on specific criteria.

## Features

- Filter stocks based on multiple parameters:
  - Market Capitalization
  - P/E Ratio
  - ROE (Return on Equity)
  - Debt-to-Equity Ratio
  - Dividend Yield
  - Revenue Growth
  - EPS Growth
  - Current Ratio
  - Gross Margin
- AND-based logic for multiple conditions
- Real-time filtering
- Sortable results table
- Pagination support
- Responsive design
- Custom query examples
## Tech Stack

- React.js
- Tailwind CSS
- Heroicons
- JavaScript

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/AbhinavKRN/Stock_Screen.git
cd stock-screener
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Project Structure

```
stock-screener/
├── src/
│   ├── components/
│   │   ├── ScreeningForm.js
│   │   └── ResultsTable.js
│   ├── data/
│   │   └── stocks.js
│   ├── utils/
│   │   ├── filterStocks.js
│   │   └── formatters.js
│   ├── App.js
│   └── index.js
├── public/
└── package.json
```

## Usage

1. Select a parameter from the dropdown (e.g., Market Capitalization)
2. Choose an operator (>, <, =, >=, <=)
3. Enter a value
4. Click "AND" to add more conditions if needed
5. Click "RUN THIS QUERY" to see the results

Example Query:
```
Market Capitalization > 500 AND
Price to earning < 15 AND
Return on capital employed > 22%
```

## Configuration

The stock data can be configured in `src/data/stocks.js`. You can modify the existing data or add your own stock entries following the same structure:

```javascript
{
  "Ticker": "STK1",
  "Market Capitalization": 187.9,
  "P/E Ratio": 36.42,
  "ROE": -8.89,
  "Debt-to-Equity Ratio": 1.04,
  "Dividend Yield": 1.31,
  "Revenue Growth": 23.1,
  "EPS Growth": 10.18,
  "Current Ratio": 1.22,
  "Gross Margin": 50.04
}
```

## Deployment

To build the project for production:

```bash
npm run build
```

This will create a `build` folder with production-ready files.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by [Screener.in](https://www.screener.in)
- UI components from Tailwind CSS
- Icons from Heroicons

## Contact

Your Name - your.email@example.com
Project Link: [https://github.com/AbhinavKRN/Stock_Screen](https://github.com/AbhinavKRN/Stock_Screen)

## Support

If you found this project helpful, please give it a ⭐️!