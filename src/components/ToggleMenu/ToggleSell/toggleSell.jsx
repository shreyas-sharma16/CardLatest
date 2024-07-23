import React, { useState } from "react";
import "./toggleSell.css";

const ToggleSell = () => {
  const [amount1, setAmount1] = useState("");
  const [currency1, setCurrency1] = useState("ADA");
  const [amount2, setAmount2] = useState("");
  const [currency2, setCurrency2] = useState("USD");
  const [selected, setSelected] = useState("sell");
  return (
    <div className="toggle-sell">
      {selected === "sell" && (
        <div>
          <div className="trade-container">
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
            <table style={{ borderCollapse: "collapse", width: "100%" }}>
              <tbody>
                <tr>
                  <td style={{ margin: "5%", fontWeight: "bold" }}>Summary</td>
                  <td></td>
                </tr>
                <tr>
                  <td style={{ padding: "8px", color: "#A0A0A0" }}>
                    Entry Price
                  </td>
                  <td style={{ padding: "8px", textAlign: "right" }}>
                    $3,200.00
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "8px", color: "#A0A0A0" }}>
                    Trading Fee
                  </td>
                  <td style={{ padding: "8px", textAlign: "right" }}>
                    $320.00 of $3,200.00 (10%)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToggleSell;
