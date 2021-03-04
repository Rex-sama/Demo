import React,{useState} from 'react';
import Bmi from "./Components/Bmi";
import Tip from "./Components/Tip";

function App() {
  const [pop,setPop] = useState(false);
  const [pop1,setPop1] = useState(true);
  const [pop2,setPop2] = useState(false);
  const [pop3,setPop3] = useState(true);

  function Pop(e){
    if(pop1===true && e ){
      setPop2(false);
      setPop(true);
      setPop1(false);
    }
    else{
      setPop(false);
      setPop1(true);
      
    }
  }
  function Pop2(e){
    if(pop3===true && e ){
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
    <button onClick={(e)=>Pop2(e)} className="btn btn-success" style={{width:"160px",height:"50px",fontSize:"20px",backgroundColor:'rgb(255, 77, 77)',border:'none  '}}>Tip Calculator</button>
    {pop2?<Tip />:''}

    {/* BMI */}
    <br/><br/>
        <button onClick={(e)=>Pop(e)} className="btn btn-success" style={{width:"160px",height:"50px",fontSize:"20px",position:'absolute'}}>BMI Calculator</button><br/> <br/>
        {pop?<Bmi />:''}

    </div>
  );
}

export default App;