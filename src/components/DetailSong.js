import React from 'react';

// import { Container } from './styles';

function DetailSong() {
  return (
    <div className='col-span-1 p-3'>
        <h2 className='text-cyan-400 font-blod'>Now Playing</h2>
        <h2 className='text-neutral-200 text-2xl'>Sing me to sleep</h2>
        <div className='w-[240px] m-auto mt-10'>
            <img className='w-full' src='https://avatar-ex-swe.nixcdn.com/song/2017/10/20/a/9/1/8/1508495764582_640.jpg' alt='avatar'/>
        </div>
        <div className='flex justify-evenly items-center mt-10'>
            <img className='w-[70px] rounded-full' src='https://avatar-ex-swe.nixcdn.com/song/2017/10/20/a/9/1/8/1508495764582_640.jpg' alt='avatar'/>
            <span className='text-xl text-white'>Alan Walker</span>
        </div>
    </div>
  );
}

export default DetailSong;