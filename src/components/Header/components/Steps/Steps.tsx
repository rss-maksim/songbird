import React from 'react';
import cn from 'classnames';

import { IStep } from '../../../../models';

import './index.scss'

interface IProps {
    currentStep: number
    steps: IStep[]
}

export const Steps = ({ currentStep = 1, steps }: IProps) => (
    <div className="steps-wrapper">
        {steps.map(({ name }, index: number) => (
            <div className={cn('step-item', { active: index === currentStep })} key={name}>{name}</div>
        ))}
    </div>
);