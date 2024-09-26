import React from 'react';
import { VideoAbout } from './VideoAbout';
import { Recommended } from './Recommended/Recommended';
import { Comments } from './Comments/Comments';

export function VideoMainInfo({ movie }) {

    return (
        <div className='flex flex-col items-start w-full justify-start gap-10 max-w-full'>  
            <VideoAbout movie={movie} />
            <Recommended movie={movie} />
            <Comments movie={movie} />
        </div>
    );
}
