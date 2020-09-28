import React, { FC, ReactNode } from 'react';
import { createUseStyles } from 'react-jss';

import Text from '../../shared/Text';
import Title from '../../shared/Title';
import { KnowledgeI, TechnoI } from './Knowledges';
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
        composes: 'flexRow',
        flex: 1.2,
    },
    card: {
        composes: 'flexColumn spaceBetween center',
        width: 88,
        padding: theme.spacing(3),
        marginRight: theme.spacing(1),
        height: 83,
        backgroundColor: '#fff',
        boxShadow: '0 8px 10px 0 rgba(0,0,0,.08)',
        borderRadius: 10,
    },
    cardBody: {
        composes: 'flexColumn spaceBetween stretchSelf center',
    },
    label: {
        composes: 'font-ProximaNova-bold',
        fontSize: 16,
        marginBottom: theme.spacing(1),
    },
    title: {
        fontSize: 33,
    },
    descriptionContainer: {
        width: 400,
    },
    description: {
        fontWeight: 300,
        lineHeight: '1.8em',
        fontSize: 17,
    },
}));

const getColor = (percent: number): string => {
    let color;
    if (percent > 50) color = 'green';
    if (percent > 25 && percent <= 50) color = 'red';
    if (percent <= 25) color = 'blue';
    return color;
};

type Props = { data: KnowledgeI };
const Knowledge: FC<Props> = ({ data }) => {
    const classes = useStyles();
    return (
        <div className={classes.knowledgeRoot}>
            <div className={classes.knowledgeContent}>
                <div className={classes.textContainer}>
                    <Title text={data.title} level={2} className={classes.title} />
                    <div className={classes.descriptionContainer}>
                        <Text text={data.description} tagName="p" className={classes.description} />
                    </div>
                </div>
                <div className={classes.imagesContainer}>
                    {data.technos.map(
                        (d: TechnoI): ReactNode => (
                            <div className={classes.card} key={d.name}>
                                <img alt="react" src={`/images/technos/${d.image}.png`} />
                                <div className={classes.cardBody}>
                                    <Text text={d.name} className={classes.label} />
                                    <ProgressiveBar color={getColor(d.value)} percent={d.value} height={8} />
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default Knowledge;
