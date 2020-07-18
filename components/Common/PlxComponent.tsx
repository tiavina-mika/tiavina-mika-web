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
    id?: string;
    trigger?: number;
};

const PlxComponent: FC<Props> = ({ className, parallaxData, triggerClass, children, triggerlassName, id, trigger }) => {
    const isMobile = useSelector(screenState);

    const Component = !isMobile ? Plx : 'div';
    const otherProps = isMobile ? {} : { parallaxData };
    return (
        <Component {...otherProps} className={className} id={id}>
            {!isMobile && (
                <div
                    className={clsx(triggerClass, triggerlassName)}
                    style={{ pointerEvents: 'none', marginTop: `${trigger}vh` }}
                />
            )}
            {children}
        </Component>
    );
};

export default PlxComponent;
