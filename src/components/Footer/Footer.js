import React from 'react';
import './Footer.css'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div>
            <div className="footer">
                <div className="footer-img">
                    <img src="https://i.pinimg.com/originals/09/a8/c3/09a8c300a68b8dcdca643350bc4b218a.png" alt=""/>
                    <img src="https://i.pinimg.com/originals/8c/e4/7f/8ce47fd872187bfa8d11505b3bd8944e.png" alt=""/>
                    <img src="https://i.pinimg.com/originals/bb/2a/2c/bb2a2c8aa05dc88061b6dbf4c37a8e7b.png" alt=""/>
                </div>
                <div className="footer-info">
                    <p>©<span>{currentYear}</span> Name | ALL RIGHTS RESERVED</p>
                    <div className="footer-policy">
                        <p>Private Policy</p>
                        <p>Term of Use</p>
                    </div>
                </div>
            </div>
            <div className="footer-mobile">
                <div className="mobile-info">
                    <div className="footer-img">
                        <img src="https://i.pinimg.com/originals/09/a8/c3/09a8c300a68b8dcdca643350bc4b218a.png" alt=""/>
                        <img src="https://i.pinimg.com/originals/8c/e4/7f/8ce47fd872187bfa8d11505b3bd8944e.png" alt=""/>
                        <img src="https://i.pinimg.com/originals/bb/2a/2c/bb2a2c8aa05dc88061b6dbf4c37a8e7b.png" alt=""/>
                    </div>
                    <div className="footer-info">
                        <div className="footer-policy">
                            <p>Term of Use</p>
                            <p>Private Policy</p>
                        </div>
                    </div>
                </div>
                <p className="year">©<span>{currentYear}</span> Name | ALL RIGHTS RESERVED</p>

            </div>
        </div>
    );
};

export default Footer;