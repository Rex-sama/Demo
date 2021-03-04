import React from 'react'

export default function New({feet,inch,kg}) {
    const meter = (feet*0.3048)+(inch*0.0254);
    const bmi= Number(kg)/Number(meter*meter)
    const status =bmi<18.5?"Underweight":18.5<=bmi<=24.9?"Normal weight":25<=bmi<=29.9?"Overweight":"Obesity";
    
    return (
        <div>
           <h2>BMI = {Number(bmi.toFixed(2))} </h2>
         
           <h4>{status}</h4>
        </div>
    )
}
