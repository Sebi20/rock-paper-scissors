import './App.css';
import {useState} from 'react';
import paper from './paper.svg';
import rock from './rock.svg';
import scissors from './scissors.svg'

function App() {
  const[sign, setSign] = useState("hey");
  const [result, setResult] = useState('');

  const randomSign = ['rock', 'paper', 'scissors'];

  function check(param){
    setSign(param);

    if(randomSign[Math.floor(Math.random() * 3)] === param){
      setResult('WIN!!! 😁 Go again');
    }else {
      setResult("FAIL!!! 😢 Go again");
    }
  }

  return (
    <>
      <h1 className='header'>Rock, Paper, Scissors?</h1>
      
      <h2 className='result'>{result}</h2>
      <div className='signContainer'>
        <img class='sign' onClick={() => {check("rock")}} src={rock}></img>
        <img class='sign' onClick={() => {check("papaer")}} src={paper}></img>
        <img class='sign'  onClick={() => {check("scissors")}} src={scissors}></img>
      </div>
    </>
  );
}

export default App;
