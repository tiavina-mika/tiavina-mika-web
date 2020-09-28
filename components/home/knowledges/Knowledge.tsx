import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';
import Text from '../../shared/Text';
import Title from '../../shared/Title';
import ProgressiveBar from './ProgressiveBar';

const useStyles = createUseStyles((theme: any) => ({
    knowledgeRoot: {
        composes: 'flexColumn center stretchSelf',
        fontFamily: 'font-ProximaNova-regular',
        marginTop: theme.spacing(20),
    },
    knowledgeContent: {
        composes: 'flexRow justifyCenter alignCenter',
        alignSelf: 'center',
        width: 1200,
    },
    textContainer: {
        composes: 'flexColumn',
        flex: 1,
    },
    imagesContainer: {
        composes: 'flexColumn',
        flex: 1.2,
    },
    card: {
        composes: 'flexColumn spaceBetween center',
        width: 118,
        padding: theme.spacing(3),
        height: 98,
        backgroundColor: '#fff',
        boxShadow: '0 6px 10px rgba(0,0,0,.08)',
        borderRadius: 10,
    },
    cardBody: {
        composes: 'flexColumn spaceBetween stretchSelf center',
    },
    label: {
        composes: 'font-ProximaNova-bold',
        fontSize: 18,
        marginBottom: theme.spacing(1),
    },
}));

const Knowledge: FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.knowledgeRoot}>
            <div className={classes.knowledgeContent}>
                <div className={classes.textContainer}>
                    <Title text="Fontend" />
                </div>
                <div className={classes.imagesContainer}>
                    <div className={classes.card}>
                        <img alt="react" src={`/images/technos/react.png`} />
                        <div className={classes.cardBody}>
                            <Text text="React" className={classes.label} />
                            <ProgressiveBar color="#FEE895" percent={90} height={8} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Knowledge;
