import React from 'react'

import { IProps } from './types';

import './index.scss'

export class Player extends React.Component<IProps>{
    render() {
        const { autoPlay = false, children, className, controls = true, src } = this.props;

        return (
            <div className="audio-player-container">
                <audio className={className} src={src} autoPlay={autoPlay} controls={controls} title="">
                    {children}
                </audio>
            </div>
        )
    }
}