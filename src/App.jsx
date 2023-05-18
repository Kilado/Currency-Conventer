import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [currencyOptions, setCurrencyOptions] = useState({});
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("RUB");
  const [amount, setAmount] = useState(0);
  const [rates, setRates] = useState([]);
  const [result, setResult] = useState(0);

  useEffect(() => {
    const getCurrencyOptions = async () => {
      try {
        const response = await axios.get(
          "https://api.exchangerate.host/symbols",
        );
        setCurrencyOptions(response.data.symbols);
      } catch (error) {
        console.error(error);
      }
    };

    const getRates = async () => {
      try {
        const response = await axios.get(
          `https://api.exchangerate.host/convert?from=${fromCurrency}&to=${toCurrency}`,
        );
        setRates(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getCurrencyOptions();
    getRates();
  }, [fromCurrency, toCurrency]);

  const convertCurrency = (e) => {
    e.preventDefault();

    const convert = amount * rates.result;

    setResult(convert.toFixed(2));
  };

  return (
    <div className="currencyConverter">
      <div className="title">
        <img className="logo" src="/exchanging.png" alt="Exchanging" />
        <h1>Currency Converter</h1>
      </div>
      <form className="convertForm" onSubmit={convertCurrency}>
        <div>
          <label htmlFor="amount">Amount</label>
          <input
            className="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="fromCurrency">From</label>
          <select
            className="fromCurrency"
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          >
            {Object.keys(currencyOptions).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="toCurrency">To</label>
          <select
            className="toCurrency"
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          >
            {Object.keys(currencyOptions).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
        <button>Convert</button>
      </form>
      <div className="convertResult">
        <h2>Converted Amount</h2>
        <p className="result">{`${amount} ${fromCurrency} = ${result} ${toCurrency}`}</p>
      </div>
    </div>
  );
}

export default App;
