import React,{useState} from 'react';
import Bmi from "./Components/Bmi";
import Tip from "./Components/Tip";

function App() {
  const [pop,setPop] = useState(false); //bmi
  const [pop1,setPop1] = useState(true);
  const [pop2,setPop2] = useState(false); //tip
  const [pop3,setPop3] = useState(true);

  function Pop(e){
    //For Bmi Calculator
    if(pop1===true && e===2){
      setPop2(false);
      setPop(true);
      setPop1(false);
    }else {
      setPop(false);
      setPop1(true); 
    } 
    // For Tip Calculator
    if(pop3===true && e===1  ){
      setPop(false);
      setPop2(true);
      setPop3(false);
    }
    else{
      setPop2(false);
      setPop3(true);
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

    </div>
  );
}

export default App;
