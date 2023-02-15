import './App.css';
import Demo from './components/Demo';


function App() {

  const x="gagan";  
  var text;

  if(x===10){
    text="Equal";
  }
  else{
    text="not equal";
  }

  return (
    <div>
       <h1 className="heading">Hello World</h1>
       <p style={{backgroundColor:"black", color:"white",fontSize:"35px",textAlign:"center"}}>{50+50}</p>
       <div className='container'>
        <label for="name">
        Enter your name
        </label> <br/>
        <input type="text"/>

        <h2>{text}</h2>
        <h3>
         { x >= 10 ? "x is greater than or equal to 10":"No match"}
        </h3>

      <Demo para={x} />

       </div>
    </div>
  );
}

export default App;
