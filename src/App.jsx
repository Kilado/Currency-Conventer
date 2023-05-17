import "./App.css";

function App() {
  return (
    <div className="currencyConverter">
      <div className="title">
        <img className="logo" src="/exchanging.png" alt="Exchanging" />
        <h1>Currency Converter</h1>
      </div>
      <form className="convertForm">
        <div>
          <label htmlFor="amount">Amount</label>
          <input className="amount" type="number" />
        </div>
        <div>
          <label htmlFor="fromCurrency">From</label>
          <select className="fromCurrency"></select>
        </div>
        <div>
          <label htmlFor="toCurrency">To</label>
          <select className="toCurrency"></select>
        </div>
        <button>Convert</button>
      </form>
      <div className="convertResult">
        <h2>Converted Amount</h2>
        <p className="result">1 USD = 80.76 RUB</p>
      </div>
    </div>
  );
}

export default App;
