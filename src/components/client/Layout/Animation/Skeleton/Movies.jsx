import React from 'react';
import './PulsingSquares.css'; 
import poster from '../../../../../assets/images/skeleton.jpg'

const PulsingSquares = () => {
  const squares = Array.from({ length: 10 });

  return ( 
    <>
        {squares.map((_, index) => (
            <div className='pulsing-square' key={index}>
                <img src={poster} className='opacity-0' style={{zIndex: "1"}}/>
            </div>
        ))}
    </>
  );
};

export default PulsingSquares;
