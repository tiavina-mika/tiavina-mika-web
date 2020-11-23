import React, { FC, ReactNode } from 'react';
import clsx from 'clsx';
import Plx from '../../components/home/projects/node_modules/react-plx';
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
    tagName?: string;
};

const PlxComponent: FC<Props> = ({
    className,
    parallaxData,
    triggerClass,
    children,
    triggerlassName,
    id,
    trigger,
    tagName,
}) => {
    const isMobile = useSelector(screenState);

    const Component = !isMobile ? Plx : tagName ? tagName : 'div';
    const otherProps = isMobile ? {} : { parallaxData, tagName };
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
