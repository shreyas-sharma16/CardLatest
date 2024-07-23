import React, { useState } from "react";
import "./toggleBuy.css";

const ToggleBuy = () => {
  const [amount1, setAmount1] = useState("");
  const [currency1, setCurrency1] = useState("ADA");
  const [amount2, setAmount2] = useState("");
  const [currency2, setCurrency2] = useState("USD");
  const [selected, setSelected] = useState("buy");
  return (
    <div className="toggle-content">
      {selected === "buy" && (
        <div>
          <form>
            <div className="trade-container">
              <div className="trade-section">
                <div className="amount-row">
                  <input
                    type="text"
                    value={amount1}
                    onChange={(e) => setAmount1(e.target.value)}
                    className="amount-input"
                  />
                  <select
                    value={currency1}
                    onChange={(e) => setCurrency1(e.target.value)}
                    className="currency-select"
                  >
                    <option value="ADA">ADA</option>
                    <option value="BTC">BTC</option>
                    <option value="ETH">ETH</option>
                  </select>
                </div>
                <div className="amount-row">
                  <input
                    type="text"
                    value={amount2}
                    onChange={(e) => setAmount2(e.target.value)}
                    className="amount-input"
                  />
                  <select
                    value={currency2}
                    onChange={(e) => setCurrency2(e.target.value)}
                    className="currency-select"
                  >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                  </select>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ToggleBuy;
