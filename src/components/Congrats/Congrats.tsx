import React from 'react';

import { Button } from '../Button';

import './index.scss';

interface IProps {
    score: number
    maxScore: number
    onRepeat: () => void
}

export const Congrats = ({ score, maxScore, onRepeat }: IProps) => (
    <div className="congrats">
        <div className="congrats-header">Congratulations!</div>
        <div className="congrats-body">
            You have passed quiz and have scored {score} out of {maxScore}
        </div>
        {score === maxScore ? (
            <div className="congrats-game-over">
                <div>Do you like Queen?! Because your knowledge are excellent!</div>
                <div>The game is over your absolute victory!</div>
            </div>
        ):(
            <Button className="congrats-button" onClick={onRepeat}>Try again</Button>
        )}
    </div>
);