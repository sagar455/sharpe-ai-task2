/*eslint-disable react-hooks/exhaustive-deps*/
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [displayValue, setDisplayValue] = useState("");
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const newTimeoutId = setTimeout(() => {
      setDisplayValue(inputValue);
    }, 1000);

    setTimeoutId(newTimeoutId);

    return () => {
      clearTimeout(newTimeoutId);
    };
  }, [inputValue]);

  const handleInputChange = (e) => {
    if (e.target.value < 0) {
      setInputValue(0);
    } else {
      setInputValue(e.target.value);
    }
  };

  return (
    <div className="container">
      <div className="btn-section">
        <div className="button-container">
          <button className="btn">Open</button>
          <button className="btn">Close</button>
          <button className="btn">Boost</button>
        </div>
      </div>
      <div className="content-section">
        <div className="card1">
          <label>Select Asset</label>

          <select name="options" className="dropdown">
            <option value="option1">ETH</option>
            <option value="option2">BTC</option>
            <option value="option3">BHB</option>
          </select>
          <label>Borrow Amount</label>
          <div className="input-container">
            <p className="badge">Max Held Amount:200</p>
            <input
              type="number"
              step="0.01"
              min="0"
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
          <p className="output">{displayValue}</p>
          <button className="execute-btn">Execute</button>
        </div>
        <div className="card2">
          <div className="sub-card1"></div>
          <div className="sub-card2"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
