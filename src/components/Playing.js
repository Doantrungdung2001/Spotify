import React from 'react';
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';
// import { Container } from './styles';

function Playing() {
  return (
    <div>
        <AudioPlayer className='player-music' src='' showSkipControls={true} showJumpControls={false} layout="horizontal" />
    </div>
  );
}

export default Playing;