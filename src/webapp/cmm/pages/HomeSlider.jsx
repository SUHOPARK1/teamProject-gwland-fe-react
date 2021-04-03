import React, { Fragment } from "react"
import { SvgIcon } from '@material-ui/core'
import Slider from "react-slick"
import { Link } from "components/elements"
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
                        <h2>클릭 한 번으로 코스 추천을 받아보세요!</h2>
                        <h2>⬇</h2>
                        <SvgIcon style={{ fontSize: "100px" }}>
                            <Link url="/survey">
                                <path fill="rgb(235, 232, 220)" d="M1,6L2.5,7.5L1,9L2.5,10.5L1,12L2.5,13.5L1,15H3A3,3 0 0,0 6,18A3,3 0 0,0 9,15H15A3,3 0 0,0 18,18A3,3 0 0,0 21,15H23V8C23,6.89 22.11,6 21,6H1M4,7.5H6.5V10H4V7.5M8,7.5H12V10H8V7.5M13.5,7.5H17.5V10H13.5V7.5M19,7.5H21.5V13L19,11V7.5M6,13.5A1.5,1.5 0 0,1 7.5,15A1.5,1.5 0 0,1 6,16.5A1.5,1.5 0 0,1 4.5,15A1.5,1.5 0 0,1 6,13.5M18,13.5A1.5,1.5 0 0,1 19.5,15A1.5,1.5 0 0,1 18,16.5A1.5,1.5 0 0,1 16.5,15A1.5,1.5 0 0,1 18,13.5Z" />
                            </Link>
                        </SvgIcon>
                    </div>
                    <div class="img-cover"></div>
                </div>

                <div class="img2">
                    <div class="content">
                        <h1>Tripass</h1>
                        <h2>클릭 한 번으로 코스 추천을 받아보세요!</h2>
                        <h2>⬇</h2>
                        <SvgIcon style={{ fontSize: "100px" }}>
                            <Link url="/survey">
                                <path fill="rgb(235, 232, 220)" d="M1,6L2.5,7.5L1,9L2.5,10.5L1,12L2.5,13.5L1,15H3A3,3 0 0,0 6,18A3,3 0 0,0 9,15H15A3,3 0 0,0 18,18A3,3 0 0,0 21,15H23V8C23,6.89 22.11,6 21,6H1M4,7.5H6.5V10H4V7.5M8,7.5H12V10H8V7.5M13.5,7.5H17.5V10H13.5V7.5M19,7.5H21.5V13L19,11V7.5M6,13.5A1.5,1.5 0 0,1 7.5,15A1.5,1.5 0 0,1 6,16.5A1.5,1.5 0 0,1 4.5,15A1.5,1.5 0 0,1 6,13.5M18,13.5A1.5,1.5 0 0,1 19.5,15A1.5,1.5 0 0,1 18,16.5A1.5,1.5 0 0,1 16.5,15A1.5,1.5 0 0,1 18,13.5Z" />
                            </Link>
                        </SvgIcon>
                    </div>
                    <div class="img-cover"></div>
                </div>
                <div class="img3">
                    <div class="content">
                        <h1>Tripass</h1>
                        <h2>클릭 한 번으로 코스 추천을 받아보세요!</h2>
                        <h2>⬇</h2>
                        <SvgIcon style={{ fontSize: "100px" }} >
                            <Link url="/survey">
                                <path fill="rgb(235, 232, 220)" d="M1,6L2.5,7.5L1,9L2.5,10.5L1,12L2.5,13.5L1,15H3A3,3 0 0,0 6,18A3,3 0 0,0 9,15H15A3,3 0 0,0 18,18A3,3 0 0,0 21,15H23V8C23,6.89 22.11,6 21,6H1M4,7.5H6.5V10H4V7.5M8,7.5H12V10H8V7.5M13.5,7.5H17.5V10H13.5V7.5M19,7.5H21.5V13L19,11V7.5M6,13.5A1.5,1.5 0 0,1 7.5,15A1.5,1.5 0 0,1 6,16.5A1.5,1.5 0 0,1 4.5,15A1.5,1.5 0 0,1 6,13.5M18,13.5A1.5,1.5 0 0,1 19.5,15A1.5,1.5 0 0,1 18,16.5A1.5,1.5 0 0,1 16.5,15A1.5,1.5 0 0,1 18,13.5Z" />
                            </Link>
                        </SvgIcon>
                    </div>
                    <div class="img-cover"></div>
                </div>
                <div class="img4">
                    <div class="content">
                        <h1>Tripass</h1>
                        <h2>클릭 한 번으로 코스 추천을 받아보세요!</h2>
                        <h2>⬇</h2>
                        <SvgIcon style={{ fontSize: "100px" }}>
                            <Link url="/survey">
                                <path fill="rgb(235, 232, 220)" d="M1,6L2.5,7.5L1,9L2.5,10.5L1,12L2.5,13.5L1,15H3A3,3 0 0,0 6,18A3,3 0 0,0 9,15H15A3,3 0 0,0 18,18A3,3 0 0,0 21,15H23V8C23,6.89 22.11,6 21,6H1M4,7.5H6.5V10H4V7.5M8,7.5H12V10H8V7.5M13.5,7.5H17.5V10H13.5V7.5M19,7.5H21.5V13L19,11V7.5M6,13.5A1.5,1.5 0 0,1 7.5,15A1.5,1.5 0 0,1 6,16.5A1.5,1.5 0 0,1 4.5,15A1.5,1.5 0 0,1 6,13.5M18,13.5A1.5,1.5 0 0,1 19.5,15A1.5,1.5 0 0,1 18,16.5A1.5,1.5 0 0,1 16.5,15A1.5,1.5 0 0,1 18,13.5Z" />
                            </Link>
                        </SvgIcon>
                    </div>
                    <div class="img-cover"></div>
                </div>


            </Slider>
        </div>
    );
}