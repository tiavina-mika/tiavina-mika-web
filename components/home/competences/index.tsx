import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';
import CompetencesSvg from './svg/CompetencesSvg';
import Cards from './cards';

const useStyles = createUseStyles({
    competences: {
        composes: 'flexRow',
    },
});

const Competences: FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.competences}>
            <CompetencesSvg />
            <Cards />
        </div>
    );
};

export default Competences;
