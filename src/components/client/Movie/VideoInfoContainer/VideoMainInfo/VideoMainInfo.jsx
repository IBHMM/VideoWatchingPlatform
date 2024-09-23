import React from 'react';
import { VideoAbout } from './VideoAbout';
import { Recommended } from './Recommended/Recommended';

export function VideoMainInfo({ movie }) {
    return (
        <div className='flex flex-col items-start w-full justify-start gap-10'>  
            <VideoAbout movie={movie} />
            <Recommended movie={movie}/>
        </div>
    );
}
