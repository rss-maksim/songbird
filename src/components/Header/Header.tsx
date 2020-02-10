import React from 'react';

import { Logo, Score } from './components';
import { Steps } from './components/Steps';
import {IStep} from '../../models';

import './index.scss'

interface IProps {
    score: number
    steps: IStep[]
    currentStep: number
}

const appName = 'Guess Queen song!';

export const Header = ({ score, currentStep, steps }: IProps) => (
    <div className="header">
        <div className="header-top">
            <Logo name={appName} />
            <Score score={score} />
        </div>
        <Steps currentStep={currentStep} steps={steps} />
    </div>
);