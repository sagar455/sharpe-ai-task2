import React , { useState,useEffect }from 'react'; 
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [displayValue, setDisplayValue] = useState('');
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const newTimeoutId = setTimeout(() => {
      setDisplayValue(inputValue);
    }, 1000); // Adjust the delay (in milliseconds) as needed

    setTimeoutId(newTimeoutId);

    return () => {
      clearTimeout(newTimeoutId);
    };
  }, [inputValue]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className='container'>
  
      <div className="btn-section">
      <div className="button-container">
        <button className='btn' >Open</button>
        <button className='btn' >Close</button>
        <button className='btn' >Boost</button>
      </div>
        </div>
        <div className="content-section">
          <div className="card1">

          <label>Select Asset</label>

<select name="options" className='dropdown' >
  <option value="option1">ETH</option>
  <option value="option2">BTC</option>
  <option value="option3">BHB</option>
</select>
<label >Borrow Amount</label>
    <input
        type="number"
        step="0.01"
        min="0"
        value={inputValue}
        onChange={handleInputChange}
      />
      <p>{displayValue}</p>
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
