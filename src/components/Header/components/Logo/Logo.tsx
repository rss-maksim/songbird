import React from 'react';

import './index.scss';

interface IProps {
    name: string
}

export const Logo = ({ name }: IProps) => (
    <div className="logo-wrapper">
        <a href="/">{name}</a>
    </div>
);