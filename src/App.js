import './App.css';
import {useState} from 'react';
import paper from './paper.svg';
import rock from './rock.svg';
import scissors from './scissors.svg'

function App() {
  const[sign, setSign] = useState("");
  return (
    <>
      <h1 className='header'>Rock, Paper, Scissors?</h1>

      <div className='signContainer'>
        <img src={rock}></img>
        <img src={paper}></img>
        <img src={scissors}></img>
      </div>
    </>
  );
}

export default App;
