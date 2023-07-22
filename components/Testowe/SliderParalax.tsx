import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper";

export function SliderParalax({ childrens }: { childrens: React.ReactNode[] }) {
    return (
        <>
            <Swiper
                // style={{
                //     "--swiper-navigation-color": "#fff",
                //     "--swiper-pagination-color": "#fff",
                // }}

                speed={600}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation]}
                className="mySwiper text-white"
                style={{ minHeight: '100vh' }}
            >
                <div
                    slot="container-start"
                    className="parallax-bg"
                    style={{
                        backgroundImage:
                            "url(https://swiperjs.com/demos/images/nature-1.jpg)",
                    }}
                    data-swiper-parallax="-23%"
                ></div>

                {childrens.map((children, index) => {
                    return <SwiperSlide style={{ height: '100vh' }} key={index}>{children}</SwiperSlide>
                })}
            </Swiper>
        </>
    );
}
