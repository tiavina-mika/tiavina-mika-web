import React, { FC, ReactNode } from 'react';
import clsx from 'clsx';
import Plx from 'react-plx';
import { useSelector } from 'react-redux';

import { screenState } from '../../reducers/appReducer';

type Props = {
    className?: string;
    triggerClass?: string;
    parallaxData: any;
    children: ReactNode;
    triggerlassName?: ReactNode;
};

const PlxComponent: FC<Props> = ({ className, parallaxData, triggerClass, children, triggerlassName }) => {
    const isMobile = useSelector(screenState);

    const Component = !isMobile ? Plx : 'div';
    const otherProps = isMobile ? {} : { parallaxData };
    return (
        <Component {...otherProps} className={className}>
            {!isMobile && <div className={clsx(triggerClass, triggerlassName)} style={{ pointerEvents: 'none' }} />}
            {children}
        </Component>
    );
};

export default PlxComponent;
