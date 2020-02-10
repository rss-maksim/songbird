import React from 'react';
import cn from 'classnames';

import './index.scss';

interface IProps {
    children: string
    className?: string
    onClick: () => void
}

export const Button = ({ children, className, onClick }: IProps) => (
    <button className={cn('button', className)} type="button" onClick={onClick}>{children}</button>
);