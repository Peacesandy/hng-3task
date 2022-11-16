import React from "react";
import { Component } from "react";
import star from '../Images/stars.png';
import one from '../Images/oneA.png';
import two from  '../Images/2a.png';
import three from  '../Images/3a.png';
import four from   '../Images/4a.png';
import five from '../Images/5a.png'
import six from '../Images/6a.png';
import seven from '../Images/7a.png';
import eight from '../Images/8a.png';

import Frame9 from '../Images/Frame 9.png';
import Frame10 from '../Images/Frame 10.png';
import Frame11 from '../Images/Frame 11.png';
import Frame12 from '../Images/Frame 12.png';
import Frame13 from '../Images/Frame 13.png';
import Frame14 from '../Images/Frame 14.png';
import Frame15 from '../Images/Frame 15.png';
import Frame16 from '../Images/Frame 16.png';

import { Link } from 'react-router-dom'
import slider from '../Images/slider.png'
import '../Place.css'

const category = [
    {title : "Resturant"}, 
    {title : "Cottage"}, 
    {title : "Cattle"}, 
    {title : "fantast city"}, 
    {title : "beach"}, 
    {title : "Carbins"}, 
    {title : "Off-grid"},
    {title : "Farm"}  
  ]

  const links = [
    {photo : one}, 
    {photo : two}, 
    {photo : three}, 
    {photo : four}, 
    {photo : five}, 
    {photo : six}, 
    {photo : seven},
    {photo : eight},
    {photo : Frame9}, 
    {photo : Frame10}, 
    {photo : Frame11}, 
    {photo : Frame12}, 
    {photo : Frame13}, 
    {photo : Frame14}, 
    {photo : Frame15},
    {photo : Frame16}  
  ]
class Main extends Component{
    render(){
        return <div className="container">
            <div className="container mb-5 mt-5">
                <ul className="nav">
                <div className="container">
                {category.map((post)=>
                        <li key={post.id} className="li mx-1"><Link to="#">{post.title}</Link></li>
        )}
                        
                        <li className="li mt-2"><button className='btn btn-white' style={{border:'1px solid #434343'}} type='button'>Location  <img src={slider} alt="" height="30px" className='mx-2'/></button></li>
                </div>
            </ul>
            </div>
            
                <div className="row" style={{fontSize:'12px'}}>
                    {/* begin */}
                    {links.map((post)=>
      <div  key={post.id} className="col-sm-12 col-md-6 col-lg-3 mb-5 mx-auto">
        <div className="card text-black " style={{maxHeight: '372px',background: 'linear-gradient(124.4deg, #FFFFFF 10.8%, #FFFFFF 87.34%)',border: '1px solid #D7D7D7',borderRadius:'15px'}}>
          
          <div className="card-body">
          <img
            src={post.photo}
            className="card-img-top"
            alt="Apple Computer"
            style={{maxHeight: '265px',border: '1px solid #D7D7D7',
            borderRadius: '15px'}}
          />
            <div>
              <div className="d-flex justify-content-between">
                <span>Desert king</span><span style={{fontWeight:"bolder"}}>1MBT per night</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>2345km away</span><span>available for 2weeks stay</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>
                <img src={star} alt="" className='me-2'/>
                
                </span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      )}

                    {/* end */}
                    
            
               
            
        </div>;
        </div>
    }
}

export default Main;

