import React from "react";
import { Component } from "react";
import Heropic from '../Images/hero_grp.png';


class Search extends Component{

    render(){
        return <div className=" hero-container">
            <div className="ms-5  hero-text">
                <h1>Rent a <span className="colo">Place</span> away from <span className="colo">Home</span> in the <span className="colo">Metaverse</span></h1>
                <p>We provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                <div>
                    <input type="text" placeholder="Search for location" className="search"/>
                    <button className="searchbtn">Search</button>
                </div>
            </div>
            <div className="hero-img">
                <img src={Heropic} className="img-fluid" alt='grouped images'/>
            </div>
            

            
            
        </div>;
    }
}

export default Search;
