import clsx from 'clsx';
import React, { ElementType, FC, Fragment, ReactNode, useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import Plx from 'react-plx';

import { useResponsive } from '../../hooks/useResponsive';
import { sm } from '../../utils/constants';

const useStyles = createUseStyles({
    plx: {
        composes: 'flexColumn flex1 stretchSelf',
        paddingBottom: 140,
    },
});

type Props = {
    children: ReactNode;
    id: string | number;
    duration?: number;
    color?: string;
    startOffset?: number;
    className?: string;
};
const BackgroundPlx: FC<Props> = ({ children, id, duration, color, startOffset, className }) => {
    const classes = useStyles();
    const triggerClassName: string = id + 'Trigger';
    const isTablet: boolean = useResponsive(sm);

    const parallaxData = useMemo(
        () => [
            /** animation in */
            {
                start: `.${triggerClassName}`,
                startOffset: `${startOffset || 50}vh`,
                duration: `${duration || 150}vh`,
                properties: [
                    {
                        startValue: '#ffffff',
                        endValue: color || '#F9F8F7',
                        property: 'backgroundColor',
                    },
                ],
            },
        ],
        [color, duration, startOffset]
    );

    const Component: ElementType = isTablet ? Fragment : Plx;
    const otherProps = isTablet ? {} : { parallaxData, className: clsx(triggerClassName, classes.plx, className) };
    return <Component {...otherProps}>{children}</Component>;
};

export default BackgroundPlx;
