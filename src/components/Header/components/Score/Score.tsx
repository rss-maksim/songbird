import React from 'react';

interface IProps {
    score: number
}

const ScoreComponent = ({ score = 0 }: IProps) => (
    <div className="score">Score: {score}</div>
);

export const Score = React.memo(ScoreComponent);
