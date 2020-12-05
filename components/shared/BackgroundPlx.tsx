import clsx from 'clsx';
import React, { ElementType, FC, Fragment, ReactNode, useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import Plx from 'react-plx';

import { useResponsive } from '../../hooks/useResponsive';
import { sm } from '../../utils/constants';

const useStyles = createUseStyles({
    plx: {
        composes: 'flexColumn flex1 stretchSelf',
    },
});

type Props = { children: ReactNode; id: string | number; duration?: number };
const BackgrounPlx: FC<Props> = ({ children, id, duration }) => {
    const classes = useStyles();
    const triggerClassName = id + 'Trigger';
    const isTablet = useResponsive(sm);

    const parallaxData = useMemo(
        () => [
            /** animation in */
            {
                start: `.${triggerClassName}`,
                startOffset: '50vh',
                duration: `${duration || 150}vh`,
                properties: [
                    {
                        startValue: '#ffffff',
                        endValue: '#F9F8F7',
                        property: 'backgroundColor',
                    },
                ],
            },
        ],
        []
    );

    const Component: ElementType = isTablet ? Fragment : Plx;
    const otherProps = isTablet ? {} : { parallaxData, className: clsx(triggerClassName, classes.plx) };
    return <Component {...otherProps}>{children}</Component>;
};

export default BackgrounPlx;
