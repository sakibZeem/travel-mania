import React from 'react';

const Carousel = ({destination}) => {
    const {img} = destination;
    console.log(img);
    return (
        <>
                <div className="carousel-item">
                    <img src={img} className="rounded-box w-60 h-96" />
                </div>
            
        </>
    );
};

export default Carousel;