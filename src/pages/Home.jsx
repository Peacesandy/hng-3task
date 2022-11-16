import Search from "../components/Search";
import Nfts from "../components/Nfts";

import Bottom from "../components/Bottom";
import Footer from "../components/Footer";
import React from "react";
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

function Home() {
    return <div className="home mt-5">
        <Search/>
        <Nfts/>
        
   <section className="mt-5 mb-5">
    <h1 className='text-center'>Inspiration for the next adventure</h1>
   </section>
        <section style={{fontSize:'12px'}}>
    <div className="container py-5">
    <div className="row">
      {/* begin card */}
    {links.map((post)=>
      <div  key={post.id} className="col-sm-12 col-md-6 col-lg-3 mb-5 mx-auto">
        <div class="card text-black mx-auto" style={{maxHeight: '372px',background: 'linear-gradient(124.4deg, #FFFFFF 10.8%, #FFFFFF 87.34%)',border: '1px solid #D7D7D7',borderRadius: '15px'}}>
          <div class="card-body">
          <img
            src={post.photo}
            class="card-img-top"
            alt="Apple Computer"
            style={{maxHeight: '265px',border: '1px solid #D7D7D7',
            borderRadius: '15px'}}/>
            <div>
              <div class="d-flex justify-content-between">
                <span>Desert king</span><span style={{fontWeight:"bolder"}}>1MBT per night</span>
              </div>
              <div class="d-flex justify-content-between">
                <span>2345km away</span><span>available for 2weeks stay</span>
              </div>
              <div class="d-flex justify-content-between">
                <span>
                <img src={star} alt="" className='me-2'/>
                
                
                </span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      )}
      {/* end of card */}

      
    </div>
    </div>
  </section>
        <Bottom/>
        <Footer/>

    </div>;
  }

export default Home;