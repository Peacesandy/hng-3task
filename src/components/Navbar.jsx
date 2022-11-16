import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import logo from '../Images/logo.png';
import '../index.css';

class Navbar extends Component{
    //constructor(props){
       // super(props);
    //}
    render(){
        return <div className="headerContainer ">
            <nav>
                <div className="logoDiv">
                    <img src={logo} className="img-fluid" alt="Metabnb logo"/>
                </div>
                <div className="navLinks">
                    <Link to="/">Home</Link>
                    <Link to="places">Place to stay</Link>
                    <a href="https://www.w3schools.com">NFTs</a>
                    <a href="https://www.w3schools.com">Community</a>
                </div>
                <div className="btn">
                    <button>Connect wallet</button>
                </div>
            </nav>
            
        </div>;
    }
}

export default Navbar;