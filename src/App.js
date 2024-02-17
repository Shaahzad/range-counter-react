import { useState } from 'react';
import './App.css';

function App() {
var date = new Date()
const [range, setRange] = useState(1)
const [input, setInput] = useState(0)

date.setDate(date.getDate() + input)

function minusHandler(){
  if(input === 0){
    return
  }
  setInput(input-range)
}


function plusHandler(){
setInput(range + input)
}
function resetHandler(){
  setInput(0)
  setRange(1)
}
  return (
    <div className='main-div'>
      <input value={range} type='range' onChange={(e) => setRange(Number(e.target.value))} min={0} max={10} />
      <span className='value'>{range}</span>
    <div className='calculate'>
    <button onClick={minusHandler} className='minus'>-</button>
  <input value={input} onChange={(e) => setInput(Number(e.target.value))} className='input'   placeholder ="....." type='text'/>
  <button onClick={plusHandler} className='plus'>+</button>
    </div>
    <p className='date'> {input ===  0  ? `today Is` :  `${input} Days from Today Is`} {date.toDateString()}</p>
    <button onClick={resetHandler} className='reset'>Reset</button>
    </div>
  );
}

export default App;
