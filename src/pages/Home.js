import React from "react";
import { Link } from "react-router-dom";

const Home=()=>{
    return (
    <div>
        <h2>Home Page</h2>
        <nav>
            <ul>
                <li>
                    <Link to="/Contact">Contact</Link> 
                </li>
                <li>
                    <Link to="/about">About</Link> 
                </li>
                <li>
                    <Link to="/Services">Services</Link> 
                </li>
            </ul>
        </nav>
    </div>
    );
}

export default Home;