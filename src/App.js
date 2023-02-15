import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Demo from './components/Demo';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Services from './pages/Services';


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

        <BrowserRouter>
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />



         </Routes>
       </BrowserRouter>












       <h1 className="heading">Hello World</h1>
       <p style={{backgroundColor:"black", color:"white",fontSize:"35px",textAlign:"center"}}>{50+50}</p>
       <div className='container'>


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
