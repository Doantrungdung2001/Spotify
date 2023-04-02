import React, { useContext, useState } from 'react';
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';
import {Songs} from '../Context'
// import { Container } from './styles';

function Playing() {
    const {song} = useContext(Songs)

  return (
    <div>
        <AudioPlayer 
        className='player-music' 
        src={song.url} 
        howSkipControls={true} 
        showJumpControls={false} 
        layout="horizontal" />
    </div>
  );
}

export default Playing;