import './App.css';
import AdviceCard from './components/AdviceCard';
import diceIcon from './images/icon-dice.svg'
import { useState } from 'react'

function App() {

  const [advice, setAdvice] = useState({id: "0", advice: "Roll the dice to get an advice!"});

  function getData() {

    const btn = document.getElementById("btn");
    if (btn) {
      setTimeout(() => {btn.checked = false}, 2000)
    }
    var request = new XMLHttpRequest();

    request.open('GET', 'https://api.adviceslip.com/advice', true);
    request.onload = function () {
      // Begin accessing JSON data here
      var data = JSON.parse(this.response)

      if (request.status >= 200 && request.status < 400) {
        setAdvice(data.slip);
      } else {
        console.log('error')
      }
    };

    request.send();
  }
  
  return (
    <div className="App">
      <AdviceCard advice={advice} />
      <input type="checkbox" id="btn" defaultChecked={false} />
      <label htmlFor="btn">
        <div className='advice-roller' onClick={getData} >
          <img src={diceIcon} alt="Dice icon"></img>
        </div>
      </label>
    </div>
  );
}

export default App;
