import {useState} from 'react'
import New from './New'

export default function Bmi() {
    const [feet,setFeet] = useState('');
    const [inch,setInch] = useState('');
    const [kg,setKg] = useState('');
    const [show,setShow] = useState(false);
    const [age,setAge] = useState('');

    function Submit(e){
        e.preventDefault();
        if(feet==='' || inch==='' || kg==='' || age==='')
        {
          alert('Enter values');
        }else{
         setShow(true);
        }
      }
    function Clear(e){
      e.preventDefault();
      setAge('');
      setFeet('');
      setInch('');
      setKg('');
      setShow(false);
    }
    return (
        <div style={{border:'1px solid grey',padding:"0px 20px 20px",width:"600px",borderRadius:"5px",position:'absolute',left:'250px',top:'110px',backgroundColor:'rgb(235, 194, 255)'}}>
          <form style={{marginTop:'20px',fontSize:'20px'} } onSubmit={(e)=>Submit(e)}>
          <label>Age : &nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="number" value={age} onChange={(e)=>setAge(e.target.value)} /><br/><br/>
            <label>Height : &nbsp;</label>
            <input type="number" value={feet} onChange={(e)=>setFeet(e.target.value)} style={{width:"140px"}} placeholder="Feet" />  
            <input type="number" value={inch} onChange={(e)=>setInch(e.target.value)} placeholder="inch" style={{width:"100px",marginLeft:"10px"}} /><br/><br/>
            <label >Weight : &nbsp;</label>
            <input type="number" value={kg} onChange={(e)=>setKg(e.target.value)} placeholder="kg"/> <br/><br/>
            <input className="btn btn-success" type="submit" value="Calculate" style={{height:"50px",width:"130px",fontSize:"20px"}} />
            <button className="btn btn-success new1a" type="submit"  style={{height:"50px",width:"130px",fontSize:"20px",margin:"10px"}} onClick={(e)=>Clear(e)}>Reset</button>
          </form>
        {show?<New feet={feet} inch={inch} kg={kg}/>:''}
        </div>
    )
}
