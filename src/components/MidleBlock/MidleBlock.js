import React from 'react';
import './MidleBlock.css'
import ReactPlayer from "react-player";
import MySlider from "../Slider/Slider";

const MiddleBlock = () => {
    return (
        <div className="middle">
            <h2 id="main">What is new in our product</h2>
            <div className="video-container">
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=sYiv9UEa4pI&ab_channel=Nexus"
                    controls
                   width={""}
                    height={""}
                />
            </div>
            <h2 className="add-h2">Additional app information</h2>
            <div className="additional">
                <div className="add-img">
                    <img className="phone"
                         src="https://i.pinimg.com/originals/63/ab/4a/63ab4a119223ac865f583496246f14d8.png" alt=""/>
                    <img className="add-photo"
                         src="https://i.pinimg.com/originals/7f/c0/af/7fc0af25ab25ac58d61533e870d4305e.jpg" alt=""/>
                </div>
                <div className="add-container">
                    <div className="add-info">
                        <div className="add-number purple">1</div>
                        <div className="add-text">
                            <h3>Licensed & Regulated</h3>
                            <p>At vero eos et accusamus et iusto odio </p>
                        </div>
                    </div>
                    <div className="add-info">
                        <div className="add-number blue">2</div>
                        <div className="add-text">
                            <h3>Multi-Asset CFD Provider</h3>
                            <p>Stocks | FX | Commodities | Indices | Crypto</p>
                        </div>
                    </div>
                    <div className="add-info">
                        <div className="add-number orange">3</div>
                        <div className="add-text">
                            <h3>Ultra-Low-Cost Trading</h3>
                            <p>Spreads from 0.0 pips</p>
                        </div>
                    </div>
                    <div className="add-info">
                        <div className="add-number red">4</div>
                        <div className="add-text">
                            <h3>Auto-Trading Platform</h3>
                            <p>Proven | Safe | Simple</p>
                        </div>
                    </div>
                </div>
                <div className="add-img-mobile">
                    <img id="ipad" className="phone"
                         src="https://i.pinimg.com/originals/63/ab/4a/63ab4a119223ac865f583496246f14d8.png" alt=""/>
                    <img id="mobile" className="phone"
                         src="https://i.pinimg.com/originals/b5/b7/fa/b5b7fa335ea59357fbf4d1432422dfaa.png" alt=""/>
                    <img className="add-photo"
                         src="https://i.pinimg.com/originals/7f/c0/af/7fc0af25ab25ac58d61533e870d4305e.jpg" alt=""/>
                </div>
            </div>
            <div className="overview">
                <div className="over-text">
                    <h3>Overview</h3>
                    <p>
                        <span>Just describe your puzzle to get the 3D solution:</span>
                        <br/>
                        <br/>
                        - Pocket Cube and Mirror Cube 2x2 : this app can solve the cube in 14 moves or less !
                        - Rubik's Cube : solves the classic 3x3 cube with an average of 27 moves.- Skewb : solved in 11
                        moves maximum.
                        - Skewb Diamond : solved in 10 moves maximum.
                        - Pyraminx : solved in 11 moves disregarding the trivial rotation of the tips.
                        - Ivy Cube : solved in 8 moves maximum.
                        <br/>
                        <br/>
                        Practice solving your puzzle as fast as possible with random shuffling and a timer with full
                        statistics (SpeedCubing).
                        Learn to solve the classic 3x3 step by step with the Fridrich method.
                        Create patterns on your 3x3 cube.
                        <br/>
                        <br/>
                        This application needs internet access to get the solution.
                    </p>
                </div>
                <div className="learn-mobile">
                    <h6>Learn More</h6>
                    <img src="https://i.pinimg.com/originals/72/ff/9c/72ff9c2203a91b748df636ef45d66412.png" alt=""/>
                </div>
                <div className="over-slider">
                    <MySlider counter={1}/>
                </div>
            </div>
            <div className="learn">
                <h6>Learn More</h6>
                <img src="https://i.pinimg.com/originals/72/ff/9c/72ff9c2203a91b748df636ef45d66412.png" alt=""/>
            </div>
            <div className="download">
                <img className="backgr" src="https://i.pinimg.com/originals/6e/52/59/6e525903d942a685b041dec84f9e3043.png" alt=""/>
                <img className="backgr-mobile" src="https://i.pinimg.com/originals/6b/94/ec/6b94ec30c014ab4bcb40e681b9bbf483.png" alt=""/>
                <div className="down-info">
                    <h4>Download our app</h4>
                    <p>Practice solving your puzzle as fast as possible with random shuffling and a timer with full statistics</p>
                </div>
                <a className="down-a" onClick={()=> document.querySelector("#offer").click()}>
                    <img src="https://i.pinimg.com/originals/ef/a4/33/efa433e921c3a65a3111616f2f9d5db4.jpg" alt=""/>
                </a>
            </div>
        </div>
    );
};

export default MiddleBlock;