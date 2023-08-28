import React, {useEffect, useRef} from 'react';
import './SideMenu.css'


const SideMenu = ({
                      activeSideMenu,
                      setActiveSideMenu,
                      scrollToDownload,
                      scrollToForm,
                      scrollToFutures,
                      scrollToMain,
                      scrollToOver,
                      scrollToSlick
                  }) => {

    const sideRef = useRef()

    useEffect(() => {
        setTimeout(() => {
            if (sideRef.current) {
                sideRef.current.style.opacity = "1"
            }
        }, 2000)

    }, [])

    return (
        <div ref={sideRef} className={activeSideMenu ? "sideMenu" : "sideMenu nonSideMenu"}>
            <div className="containerSideMenu">
                <div className="menuImg">
                    <img id='withFilter' src="https://loveriq.online/sweep/za1/menu-bar.png" alt=""/>
                    <h3>Menu</h3>
                    <div id="close" onClick={() => setActiveSideMenu(false)}>
                        <img src="https://loveriq.online/sweep/za1/close-cross.png" alt=""/>
                    </div>
                </div>
                <p onClick={() => {
                    scrollToMain()
                    setActiveSideMenu(false)
                }}>Main</p>
                <p onClick={() => {
                    scrollToFutures()
                    setActiveSideMenu(false)
                }}>About Us</p>
                <p onClick={() => {
                    scrollToOver()
                    setActiveSideMenu(false)
                }}>Features</p>
                <p onClick={() => {
                    scrollToSlick()
                    setActiveSideMenu(false)
                }}>Screenshots</p>
                <p onClick={() => {
                    scrollToDownload()
                    setActiveSideMenu(false)
                }}>Process</p>
                <p onClick={() => {
                    scrollToForm()
                    setActiveSideMenu(false)
                }}>Contacts</p>
            </div>
        </div>
    );
};

export default SideMenu;