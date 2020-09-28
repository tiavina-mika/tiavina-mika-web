import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';
import Knowledge from './Knowledge';
import OveralCard from './OveralCard';

const useStyles = createUseStyles((theme: any) => ({
    knowledgesRoot: {
        composes: 'flexColumn center stretchSelf',
        fontFamily: 'font-ProximaNova-regular',
        paddingBottom: theme.spacing(15),
    },
    progressiveContainer: {
        composes: 'flexColumn stretchSelf center',
        width: '100%',
        height: 200,
    },
}));

const Knowledges: FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.knowledgesRoot} id="knowledges">
            <OveralCard />
            <Knowledge />
        </div>
    );
};

export default Knowledges;
