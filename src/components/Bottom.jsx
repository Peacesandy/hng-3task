import React from "react";
import { Component } from "react";
import nfts from '../Images/NFTs.png';

class Bottom extends Component{
    render(){
        return <div className="bottom">
            <div className="bottomCont">
                <div className="row py-5">
                    <div className="nft-text col-sm-5 m-auto pe-5">
                        <h2 className="mb-4">Metabnb NFTs</h2>
                        <p className="mb-4 mt-3">Discover our NFT gift cards collection. Loyal customers get amazing gift cards which are traded as NFTs. These NFTs gives our customer access to loads of our exclusive services.</p>
                        <button className="bottom-btn mt-3">Learn more</button>
                    </div>
                    <div className="nfts-img col-sm-7 m-auto my-5">
                        <img src={nfts} className="img-fluid" alt="group of 3 nfts" />
                    </div>
                </div>
            </div>
            
            
        </div>;
    }
}

export default Bottom;