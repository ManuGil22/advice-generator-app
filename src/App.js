import './App.css';
import AdviceCard from './components/AdviceCard';
import diceIcon from './images/icon-dice.svg'
import { useState } from 'react'

function App() {

  document.getElementById("btn").checked = false;

  const [advice, setAdvice] = useState({id: "0", advice: "Roll the dice to get an advice!"});

  function getData() {
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
      <input type="checkbox" id="btn" checked="false"/>
      <label for="btn">
        <div className='advice-roller' onClick={getData} tabIndex="0" >
          <img src={diceIcon}></img>
        </div>
      </label>
    </div>
  );
}

export default App;
