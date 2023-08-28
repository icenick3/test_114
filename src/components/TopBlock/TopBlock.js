import React from 'react';
import './TopBlock.css'
import Header from "../Header/Header";
import MySlider from "../Slider/Slider";


const TopBlock = () => {


    return (
        <div className="TopBlock">
            <img id="first" className="background"
                 src="https://i.pinimg.com/originals/58/d7/b4/58d7b48dfee3dbd0ab1ea4d026a947e1.png" alt=""/>
            <img id="second" className="background"
                 src="https://i.pinimg.com/originals/b8/dd/06/b8dd06d5efe88d641bc952f43e91932e.png" alt=""/>
            <img id="third" className="background"
                 src="https://i.pinimg.com/originals/b5/af/ba/b5afbacced59a1056e3cd2f76650ed1d.png" alt=""/>
            <Header/>
            <h1 className="title">The Name Of The Product</h1>
            <p className="subtitle">Practice solving your puzzle as fast as possible with random shuffling and a timer
                with full statistics</p>
            <a onClick={()=> document.querySelector("#offer").click()}>
                <img src="https://i.pinimg.com/originals/ef/a4/33/efa433e921c3a65a3111616f2f9d5db4.jpg" alt=""/>
            </a>
            <div className="slider3">
                <MySlider counter={3}/>
            </div>
           <div className="slider1">
               <MySlider counter={1}/>
           </div>
        </div>
    );
};

export default TopBlock;