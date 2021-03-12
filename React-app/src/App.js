import React,{useState} from 'react';
import Bmi from "./Components/Bmi";
import Tip from "./Components/Tip";
import Watch from './Watch';

function App() {
  const [pop,setPop] = useState(false); //bmi
  const [pop2,setPop2] = useState(false); //tip
  const [pop3,setPop3] = useState(false); //stopwatch
  
  function Pop(e){
    // For Tip Calculator
    if(e===1  ){
      setPop(false);
      setPop2(true);
      setPop3(false);
    }
    else{
      setPop2(false);
    }
    //For Bmi Calculator
    if(e===2){
      setPop2(false);
      setPop(true);
      setPop3(false);
    }else {
      setPop(false);
    } 
    //StopWatch
    if(e===3){
      setPop2(false);
      setPop(false);
      setPop3(true);
    }else {
      setPop3(false);
    } 
  }
  return (
    <div style={{marginLeft:"20px",marginTop:'20px'}} >

    {/* Tip Calculator */}
    <br/>
    <button onClick={(e)=>Pop(1)} className="btn btn-success" style={{width:"160px",height:"50px",fontSize:"20px",backgroundColor:'rgb(255, 77, 77)',border:'none  '}}>Tip Calculator</button>
    {pop2?<Tip />:''}

    {/* BMI */}
    <br/><br/>
        <button onClick={(e)=>Pop(2)} className="btn btn-success" style={{width:"160px",height:"50px",fontSize:"20px",position:'absolute'}}>BMI Calculator</button><br/> <br/>
        {pop?<Bmi />:''}

    {/* StopWatch */}
    <br/><br/>
    <button onClick={(e)=>Pop(3)} className="btn btn-primary" style={{width:"160px",height:"50px",fontSize:"20px",position:'absolute'}}>Stop Watch</button><br/> <br/>
    {pop3?<Watch />:'' }
    
    </div>
  );
}

export default App;
