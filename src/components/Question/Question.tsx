import React from 'react';

import { AudioPlayer } from '../';
import placeholder from './images/placeholder.jpg'
import {ITrack} from '../../models';

import './index.scss';

interface IProps {
    question: ITrack
    solved: boolean
}

const hiddenAnswer = '******';

export const Question = ({ question, solved }: IProps) => (
    <div className="question">
        <div className="question-picture">
            <img src={solved ? question.image : placeholder} alt="Photo song" />
        </div>
        <div className="question-audio">
            <div className="question-audio-name">{solved ? question.name : hiddenAnswer}</div>
            <div className="question-audio-track">
                <AudioPlayer
                    className="audio-player"
                    src={question.audio}
                    controls
                />
            </div>
        </div>
    </div>
);