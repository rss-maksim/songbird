import React from 'react';
import Player from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import './index.scss'

import { IProps } from './types'

export const AudioPlayer = ({ autoPlay= false, src }: IProps) => (
    <div className="audio-player-container">
        <Player
            src={src}
            autoPlay={autoPlay}
            showLoopControl={false}
            showJumpControls={false}
            showDownloadProgress={false}
            showVolumeControl={false}
            autoPlayAfterSrcChange={false}
        />
    </div>
);