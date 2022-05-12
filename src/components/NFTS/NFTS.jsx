import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

import './NFTS.css';

import NFT1 from '../../media/nfts/convert/IMG_1696.jpeg';
import NFT2 from '../../media/nfts/convert/IMG_1698.jpeg';
import NFT3 from '../../media/nfts/convert/IMG_1699.jpeg';
import NFT4 from '../../media/nfts/convert/IMG_1700.jpeg';
import NFT5 from '../../media/nfts/convert/IMG_1704.jpeg';
import NFT6 from '../../media/nfts/convert/IMG_1702.jpeg';
import NFT7 from '../../media/nfts/IMG_1705.JPG';
import NFT8 from '../../media/nfts/IMG_1706.JPG';
import NFT9 from '../../media/nfts/convert/IMG_1707.jpeg';


const Nfts = () => {
    const items = [
        {id: 1, url: NFT1},
        {id: 2, url: NFT2},
        {id: 3, url: NFT3},
        {id: 4, url: NFT4},
        {id: 5, url: NFT5},
        {id: 6, url: NFT6},
        {id: 7, url: NFT7},
        {id: 8, url: NFT8},
        {id: 9, url: NFT9}
    ];



    return (
        <div className="nfts">
            <h3>Our NFTs</h3>
            <h2>Our NFTs</h2><br/>
            <Swiper spaceBetween={20}
                    slidesPerView={4}
                    modules={[Autoplay]}
                    autoplay={{delay: 1000}}
                    speed={500}>
                {items.map((item, id) =><div className="swiper-item" key={item.id}>
                    <SwiperSlide>
                        <img className="nft-img" src={item.url} alt="IMG-1545" />
                    </SwiperSlide>
                </div>)}
            </Swiper>
            <br/><br/><br/>
        </div>
    );
};

export default Nfts;