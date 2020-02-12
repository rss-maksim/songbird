import React, { ReactElement } from 'react';

import { Quiz } from '../'
import { tracks } from '../../const';
import { IStep } from '../../models';

import './index.scss';

const steps: IStep[] = [
    { name: 'Queen #1', answerId: 1 },
    { name: 'Queen #2', answerId: 2 },
    { name: 'Queen #3', answerId: 3 },
    { name: 'Queen #4', answerId: 4 },
    { name: 'Queen #5', answerId: 5 },
    { name: 'Queen #6', answerId: 6 },
];

export const App = (): ReactElement => (
    <div className="app-container">
        <Quiz options={tracks} steps={steps} />
    </div>
);
