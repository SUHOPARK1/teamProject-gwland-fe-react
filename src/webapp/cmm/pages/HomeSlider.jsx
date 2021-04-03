import React, { Fragment } from "react";
import Slider from "react-slick";
import Styles from './HomeStyles.scss'


export default () => {

    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        dots: true,
        fade: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrows: true

    };
    return (
        <div >
            <Slider {...settings}>
                <div class="img">
                    <div class="content">
                        <h1>Tripass</h1>
                        <h2>버튼하나로 코스추천을 받아보세요!</h2>
                    </div>
                    <div class="img-cover"></div>
                </div>

                <div class="img2">
                    <div class="content">
                        <h1>Tripass</h1>
                        <h2>버튼하나로 코스추천을 받아보세요!</h2>
                    </div>
                    <div class="img-cover"></div>
                </div>
                <div class="img3">
                    <div class="content">
                        <h1>Tripass</h1>
                        <h2>버튼하나로 코스추천을 받아보세요!</h2>
                    </div>
                    <div class="img-cover"></div>
                </div>
                <div class="img4">
                    <div class="content">
                        <h1>Tripass</h1>
                        <h2>버튼하나로 코스추천을 받아보세요!</h2>
                    </div>
                    <div class="img-cover"></div>
                </div>


            </Slider>
        </div>
    );
}