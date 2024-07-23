import React, { useState } from "react";
import "./toggle.css";
import ToggleBuy from "./ToggleBuy/toggleBuy";
import ToggleSell from "./ToggleSell/toggleSell";

const Toggle = () => {
  const [selected, setSelected] = useState("buy");
  // const [amount1, setAmount1] = useState("");
  // const [currency1, setCurrency1] = useState("ADA");
  // const [amount2, setAmount2] = useState("");
  // const [currency2, setCurrency2] = useState("USD");
  return (
    <div>
      <div className="toggle-switch">
        <input
          type="radio"
          id="buy"
          name="toggle"
          value="buy"
          checked={selected === "buy"}
          onChange={(e) => setSelected(e.target.value)}
        />
        <label htmlFor="buy" className={selected === "buy" ? "active" : ""}>
          Buy
        </label>
        <input
          type="radio"
          id="sell"
          name="toggle"
          value="sell"
          checked={selected === "sell"}
          onChange={(e) => setSelected(e.target.value)}
        />
        <label htmlFor="sell" className={selected === "sell" ? "active" : ""}>
          Sell
        </label>
      </div>
      <h4 style={{ margin: '5%' }}>Amount</h4>

      <div className="toggle-content">
        {selected === "buy" && (
          <div>
            <ToggleBuy/>
          </div>
        )}
        {selected === "sell" && (
          <div>
            <ToggleSell/>
          </div>
        )}
      </div>
    </div>
    
  );
};

export default Toggle;
