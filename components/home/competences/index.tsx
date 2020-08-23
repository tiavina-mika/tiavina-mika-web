import React, { FC, useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import Plx from 'react-plx';
import clsx from 'clsx';

import CompetencesSvg from './svg/CompetencesSvg';
import Cards from './cards';

const competenceItems = [
    {
        id: '1',
        name: 'web',
    },
    {
        id: '2',
        name: 'mobile',
    },
    {
        id: '3',
        name: 'database',
    },
    {
        id: '4',
        name: 'design',
    },
    {
        id: '5',
        name: 'performance',
    },
    {
        id: '6',
        name: 'security',
    },
];

const triggerClassName = 'cardsTrigger';

const useStyles = createUseStyles({
    competences: {
        composes: 'flexColumn alignCenter stretchSelf',
        margin: [100, 0],
    },
    plxTrigger: {
        marginTop: '30vh',
        pointerEvents: 'none',
    },
    cardsPlx: {
        composes: 'flexRow center',
        width: '100%',
        pointerEvents: 'none',
        bottom: 0,
        opacity: 0,
        position: 'fixed',
    },
    scrollY: {
        marginTop: '440vh',
        pointerEvents: 'none',
    },
});

const Competences: FC = () => {
    const classes = useStyles();

    const parallaxData = useMemo(
        () => [
            {
                start: `.${triggerClassName}`,
                duration: '50vh',
                properties: [
                    {
                        startValue: 40,
                        endValue: -15,
                        unit: 'vh',
                        property: 'translateY',
                    },
                    {
                        startValue: 0,
                        endValue: 1,
                        property: 'opacity',
                    },
                ],
            },
        ],
        []
    );

    return (
        <div className={classes.competences}>
            <div className={clsx(triggerClassName, classes.plxTrigger)} />
            <Plx parallaxData={parallaxData} className={classes.cardsPlx}>
                <CompetencesSvg />
                <Cards triggerClassName={triggerClassName} items={competenceItems} />
            </Plx>
            {/* ------ simulate the long scollY ------ */}
            <div className={classes.scrollY} />
        </div>
    );
};

export default Competences;
