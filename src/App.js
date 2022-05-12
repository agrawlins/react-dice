import React, { useEffect } from 'react';
import Header from './Components/Header';
import DiceBox from './Components/DiceBox';
import Footer from './Components/Footer';
import diceRolling from "./Components/Sounds/diceRolling.mp3"

function App() {
  const [numbers, setNumbers] = React.useState([null, null, null, null, null])
    const populateNumbers = () => {
        return Math.floor(Math.random() * 5) + 1
    }
    //This allows for synchronous execution
    // useEffect(() => {
    //   console.log(numbers)
    // })

    const rollDice = () => {
        const diceRollingSound = new Audio(diceRolling)
        diceRollingSound.play()
        setNumbers([populateNumbers(), populateNumbers(), populateNumbers(), populateNumbers(), populateNumbers()])
      }
  return (
    <div className='all'>
      <header className="App-header">
        <Header />
      </header>
      <div className="App">
        <section>
          <DiceBox numbers = {numbers} />          
        </section>
      </div>
      <button onClick={rollDice} className="diceButton"><h1>Roll the Dice!</h1></button>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
