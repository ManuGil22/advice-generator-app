import './App.css';
import AdviceCard from './components/AdviceCard';
import diceIcon from './images/icon-dice.svg'
import { useState } from 'react'

function App() {

  const [advice, setAdvice] = useState({id: "0", advice: "Roll the dice to get an advice!"});

  function handleAnimation () {
    const checkbox = document.getElementById("btn");
    const button = document.getElementById("button");

    checkbox.setAttribute("disabled", '');
    button.setAttribute("disabled", '');
    button.classList.add("disabled");
    if (checkbox) {
      checkbox.checked = true;
      setTimeout(() => {
        checkbox.checked = false;
        button.removeAttribute("disabled");
        button.classList.remove("disabled");
        checkbox.removeAttribute("disabled");
      }, 2000)
    }
  }

  function getData() {

    handleAnimation();

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
    <main className="App">
      <AdviceCard advice={advice} />
      <input type="checkbox" id="btn" defaultChecked={false} />
      <label htmlFor="btn">
        <button className='advice-roller' onClick={getData} id="button">
          <img src={diceIcon} alt="Dice icon"></img>
        </button>
      </label>
    </main>
  );
}

export default App;
