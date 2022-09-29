import { useState } from 'react';
import './App.css';
import AsideComponent from './components/AsideComponent/AsideComponent';
import CardComponent from './components/CardComponent/CardComponent';

function App() {


  const [time, setTime] = useState(0)
  
  let newTime = 0;
  const addListButton = (excTime)=>{

    newTime = time + excTime
    setTime(newTime)
    
  }
  
  return (
    <div className="App">
      <CardComponent addHandelar={addListButton}/>
      <AsideComponent time={time}/>
    </div>
  );
}

export default App;
