import React, {useState} from 'react';
import "./Header.css"
import SideMenu from "../SideMenu/SideMenu";


const Header = () => {


    const scrollToMain = () => {
        const mainElement = document.getElementById('main');
        if (mainElement) {
            mainElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToFutures = () => {
        const mainElement = document.querySelector('.add-h2');
        if (mainElement) {
            mainElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToOver = () => {
        const mainElement = document.querySelector('.over-text');
        if (mainElement) {
            mainElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToSlick = () => {
        const mainElement = document.querySelector('.slick-slider');
        if (mainElement) {
            mainElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToDownload = () => {
        const mainElement = document.querySelector('.download');
        if (mainElement) {
            mainElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToForm = () => {
        const mainElement = document.querySelector('.form');
        if (mainElement) {
            mainElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

const [activeSideMenu, setActiveSideMenu] = useState(false)

    console.log(activeSideMenu)
    return (
        <header>
            <p className="logo">LOGO HERE!</p>
            <div className="menu">
                <p onClick={()=> scrollToMain()}>Main</p>
                <p onClick={()=> scrollToFutures()}>About Us</p>
                <p onClick={()=> scrollToOver()}>Features</p>
                <p onClick={()=> scrollToSlick()}>Screenshots</p>
                <p onClick={()=> scrollToDownload()}>Process</p>
                <p onClick={()=> scrollToForm()}>Contacts</p>
            </div>
            <img className="mobile-menu" src="https://i.pinimg.com/originals/c5/a1/0a/c5a10a030878fb9cc71995a31c1f5d5e.png" alt="" onClick={()=> setActiveSideMenu(true)}/>
            <SideMenu setActiveSideMenu={setActiveSideMenu} activeSideMenu={activeSideMenu} scrollToMain={scrollToMain} scrollToFutures={scrollToFutures}
                      scrollToOver={scrollToOver} scrollToSlick={scrollToSlick} scrollToDownload={scrollToDownload} scrollToForm={scrollToForm}/>
        </header>
    );
};

export default Header;