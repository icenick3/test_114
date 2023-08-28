import React, {useEffect, useRef, useState} from 'react';
import './Slider.css'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
    "https://i.pinimg.com/originals/7f/c0/af/7fc0af25ab25ac58d61533e870d4305e.jpg",
    "https://i.pinimg.com/originals/20/16/06/201606e693505434abfb6a3d65e36f8f.jpg",
    "https://i.pinimg.com/originals/5d/a2/8e/5da28e6ad7f0fc612eeccb84f4153bea.jpg",
    "https://i.pinimg.com/originals/23/08/a7/2308a766007769018a963d603b43784d.jpg",
    "https://i.pinimg.com/originals/95/2e/25/952e25fe3f870aa4801222db81f66dc0.jpg",
    "https://i.pinimg.com/originals/40/99/51/4099513434592f4f55dfbe2b96380815.jpg",
    "https://i.pinimg.com/originals/d5/95/82/d5958259850e2b2e736838451d349959.jpg",
    "https://i.pinimg.com/originals/14/6a/54/146a547cd9e9d5744977fe05a1948ae5.jpg",
]
const MySlider = ({counter}) => {

const [count, setCount] = useState(0)

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: counter,
        slidesToScroll: 1,
        initialSlide: 1,
        focusOnChange: true,
        centerMode:true,
        beforeChange: (current, next)=>{
            setCount(next)
        }
    };
    const mainRef = useRef()
    useEffect(()=>{
        mainRef.current.slickGoTo(count)
    },[count])


    return (
        <div>
            <Slider {...settings} ref={mainRef}>
                {images.map((elem, index) =>
                    <div key={index}>
                        <img src={elem} alt="" className={index !== count ? "slide-m" : "active-m"}/>
                    </div>
                 )}
            </Slider>
        </div>
    );
};

export default MySlider;