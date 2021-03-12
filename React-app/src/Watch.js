import {useState} from 'react'

export default function Watch() {
    let [hr,setHr] = useState('0'+0);
    let [min,setMin] = useState('0'+0);
    let [sec,setSec] = useState('0'+0);
    let [reset,setReset] = useState(false)
   
    function Timer(e){
        console.log('click');
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);  
        
       setInterval(()=>{
        
        if(sec===61){
            setMin(min++);
            setSec(sec=0);
        }
        if(min===61){
            setHr(hr++);
            setMin(min=0);
            setSec(sec=0);
        }
        if(min<10 || min===0){
            setMin('0'+min);
        }
        if(hr<10 || hr===0){
            setHr('0'+hr);
        }
        setSec(sec++);
        if(sec<10 || sec===0){
            setSec('0'+sec);
        }
       },1000); 
    } 
    return (
        <div style={{border:'1px solid white',padding:"0px 20px 20px",width:"600px",borderRadius:"5px",position:'absolute',left:'250px',top:'110px',backgroundColor:'rgb(50, 50, 184)',color:"white"}}>
        <h1 style={{marginLeft:"100px",fontSize:"50px"}}>STOPWATCH</h1>
        
        <div>
            <h1 style={{marginLeft:"160px",fontSize:"50px"}}>{hr}:{min}:{sec}</h1>
        </div>
        <br/>
        <h1>
        <button onClick={(e)=>Timer(1)} style={{width:'150px',border:"2px solid white",borderRadius:"10px",backgroundColor:"rgb(50, 50, 184)",fontSize:"37px",padding:'10px'}}>Start</button> 
        <button onClick={(e)=>Timer(2)} style={{marginLeft:"50px",width:'150px',border:"2px solid white",borderRadius:"10px",backgroundColor:"rgb(50, 50, 184)",fontSize:"37px",padding:'10px'}} >Stop</button>
        <button  style={{marginLeft:"50px",width:'150px',border:"2px solid white",borderRadius:"10px",backgroundColor:"rgb(50, 50, 184)",fontSize:"37px",padding:'10px'}}>Reset</button></h1>
        </div>
    )
}
