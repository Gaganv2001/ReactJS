import React from "react";
import MadeGoal from "./MadeGoal.js";
import MissedGoal from "./MissedGoal.js";


const Demo=(props) =>{
    const a=10;
    var name;
    const cars=["BMW","Benz","Skoda" , "Hyundai"];
    const Passwordregex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const handleClick=()=>{
        alert("Button clicked")
    } 

    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(name);
    }


    const handleNameChange=(event)=>{
        name=event.target.value;

    }

    const handlePassChange=(event)=>{
        if (Passwordregex.test(event.target.value)){
            console.log("matched");
        }else{
            console.log("not matched");
        }
    }

 

    return <div>
        <h2>New component</h2>
        <h3> Hello, {props.para}</h3> 
        <button onClick={handleClick}>BUTTON</button>
        {a >=10 ? <MadeGoal /> : <MissedGoal />}

        <ol>
            {cars.map((car,i)=>(
                <li key={i}>{car}</li>
            ))}
        </ol>

        <form onSubmit={handleSubmit}>
        <label >Enter your name</label> <br/>
        <input type="text" name="username" onChange={handleNameChange}/><br/>
        <label>Enter your Password</label> <br/>
        <input type="password" name="password" onChange={handlePassChange}/><br/>
        <input type="submit"/><br/>
       
        </form>
        
        </div>
};

export default Demo;