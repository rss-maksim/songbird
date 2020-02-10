import React from 'react';
import cn from 'classnames';

import {ITrack} from '../../models';
import { IAttemptObj } from '../common';

import './index.scss';

interface IProps {
    answers: ITrack[]
    onSelect: (track: ITrack) => () => void
    attempts: IAttemptObj
}

export const AnswerOptions = ({ answers, attempts, onSelect }: IProps) => (
    <div className="answer-options">
        {answers.map((answer) => (
            <div className="answer-option" onClick={onSelect(answer)} key={answer.id}>
                <div className={cn('answer-option-btn', { correct: attempts[answer.id], wrong: !attempts[answer.id] && answer.id in attempts })} />
                <div className="answer-option-name">{answer.name}</div>
            </div>
        ))}
    </div>
);