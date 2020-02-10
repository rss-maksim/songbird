import { ReactElement } from 'react';

export interface IProps {
    src: string
    autoPlay?: boolean
    controls?: boolean
    children?: ReactElement
    className?: string
}