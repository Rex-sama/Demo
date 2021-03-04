import {useState} from 'react';

export default function Tip() {
    const [amount,setAmount]=useState('');
    const [tip, setTip] = useState('');
    const [people, setPeople] = useState(1);
    const result=(amount*tip/100);
    return (
      <div style={{border:"1px solid rgb(255, 77, 77)",padding:"0px 20px 20px",width:"600px",borderRadius:"5px",marginTop:'20px',position:'absolute', left:"250px",backgroundColor:"rgb(255, 77, 77)",color:'white'}}>
      <h3>Amount</h3>
      <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} style={{height:"40px",fontSize:"20px",width:"200px",color:'grey'}} min="0" />
      <h3>Tip %</h3>
      <input type="number" value={tip} onChange={(e)=>setTip(e.target.value)} style={{height:"40px",fontSize:"20px",width:"200px",color:'grey'}} min="0"/>
      <h3>Number of People</h3>
      <input type="number" value={people} onChange={(e)=>setPeople(e.target.value)} style={{height:"40px",fontSize:"20px",width:"200px",color:'grey'}} min="1" max="100"/>
      <div style={{position:"absolute" ,top:"140px",marginLeft:"300px"}}>
      <h1>Tip ${(result/Number(people)).toFixed(2)}</h1>
      <h1>Total ${((Number(amount)+result)/Number(people)).toFixed(2)}</h1>
      </div>
      </div>
    )
}
