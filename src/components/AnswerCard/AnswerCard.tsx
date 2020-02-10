import React from 'react';

import { AudioPlayer } from '../';
import {ITrack} from '../../models';

import './index.scss';

interface IProps {
    answer: ITrack | null
    solved: boolean
}

export const AnswerCard = ({ answer, solved}: IProps) => (
    <div className="answer-card">
        {Boolean(answer) ? (
            <>
                <div className="answer-card-body">
                    <div className="answer-card-body-image">
                        <img src={answer?.image} alt="Image" />
                    </div>
                    <div className="answer-card-body-info">
                        <div>{answer?.band}</div>
                        <div className="answer-card-body-info__name">{answer?.name}</div>
                        {solved && (
                            <div>
                                <AudioPlayer
                                    className="audio-player"
                                    src={answer?.audio}
                                    controls
                                />
                            </div>
                        )}
                    </div>
                </div>
                <div className="answer-card-description">{answer?.description}</div>
            </>
        ): <div>Listen to the player and choose an answer from the list.</div>}
    </div>
);