import React from 'react';
import Header from './Components/Header';
import DiceBox from './Components/DiceBox';
import Footer from './Components/Footer';
import diceRolling from "./Components/Sounds/diceRolling.mp3"

function App() {
  const [numbers, setNumbers] = React.useState([1, 2, 3, 4, 5])
  
  const rollDice = () => {
    const diceRollingSound = new Audio(diceRolling)
    diceRollingSound.play()
    setNumbers()
  }

  return (
    <div className='all'>
      <header className="App-header">
        <Header />
      </header>
      <div className="App">
        <section>
          <DiceBox />          
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
