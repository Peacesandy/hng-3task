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
                    <a href="#">NFT</a>
                    <a href="#">Tokens</a>
                    <a href="#">Landlords</a>
                    <a href="#">Discord</a>

                </div>
                <div className="col-md-3 col-sm-4 d-flex flex-column footer-links">
                    <h5>Places</h5>
                    <a href="#">Castle</a>
                    <a href="#">Farm</a>
                    <a href="#">Beach</a>
                    <a href="#">Learn more</a>
                </div>
                <div className="col-md-3 col-sm-4 d-flex flex-column footer-links">
                    <h5>About us</h5>
                    <a href="#">Road map</a>
                    <a href="#">Creators</a>
                    <a href="#">Career</a>
                    <a href="#">Contact us</a>
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