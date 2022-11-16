import React from 'react'
import {Component} from 'react'
import fLogo from '../Images/footer-logo.svg';
import fb from '../Images/fb-icon.png';
import ig from '../Images/ig-icon.png';
import twitt from '../Images/twitter-icon.png';

class Footer extends Component{
    render(){
        return <div className="footer">
            <div className="footerCont">
            <div className="row py-5">
                
                <div className="col-md-3 col-sm-12 d-flex flex-column justify-content-between footer-img">
                    <div>
                        <img src={fLogo} className="img-fluid footerLogo" alt="Metabnb logo" />
                    </div>
                    <div className="d-flex  icons">
                        <img src={fb} className="img-fluid" alt="Facebook logo" />
                        <img src= {ig} className='img-fluid' alt='Instagram logo'/>
                        <img src={twitt} className="img-fluid" alt="Twitter logo" />
                    </div>
                </div>
                
                <div className="col-md-3 col-sm-4 d-flex flex-column footer-links ">
                    <h5>Community</h5>
                    <a href="https://www.w3schools.com">NFT</a>
                    <a href="https://www.w3schools.com">Tokens</a>
                    <a href="https://www.w3schools.com">Landlords</a>
                    <a href="https://www.w3schools.com">Discord</a>

                </div>
                <div className="col-md-3 col-sm-4 d-flex flex-column footer-links">
                    <h5>Places</h5>
                    <a href="https://www.w3schools.com">Castle</a>
                    <a href="https://www.w3schools.com">Farm</a>
                    <a href="https://www.w3schools.com">Beach</a>
                    <a href="https://www.w3schools.com">Learn more</a>
                </div>
                <div className="col-md-3 col-sm-4 d-flex flex-column footer-links">
                    <h5>About us</h5>
                    <a href="https://www.w3schools.com">Road map</a>
                    <a href="https://www.w3schools.com">Creators</a>
                    <a href="https://www.w3schools.com">Career</a>
                    <a href="https://www.w3schools.com">Contact us</a>
                </div>
            </div>
            <div className="row ">
                <div className="col-12 copyright mb-3">
                    <p>&copy; 2022 Metabnb</p>
                </div>
            </div>
            </div>
            
        </div>;
    }
}

export default Footer;