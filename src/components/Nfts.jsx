import React from "react";
import { Component } from "react";
import '../index.css';
import MB from '../Images/mbtoken.svg';
import MM from '../Images/metamask.svg';
import sea from '../Images/opensea.svg';

class Brands extends Component{ 
    render(){
        return <div className="brands">
        <div className="brand mb">
            <img src={MB} className="img-fluid" alt="MBToken logo" />
        </div>
        <div className="brand meta ">
            <img src={MM} className="img-fluid" alt="MBToken logo" />
        </div>
        <div className="brand sea">
            <img src={sea} className="img-fluid" alt="MBToken logo" />
        </div>
    </div>
    }
}

export default Brands;