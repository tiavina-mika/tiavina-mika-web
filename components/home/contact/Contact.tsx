import React from 'react';
import { createUseStyles } from 'react-jss';

import Layout from '../../shared/Layout';
import MainTitle from '../../shared/MainTitle';
import Title from '../../shared/Title';
import Details from './Details';
import Form from './Form';

const useStyles = createUseStyles((theme: any) => ({
    contact: {
        composes: 'flexColumn stretchSelf',
        height: '200vh',
    },
    contactTitle: {
        composes: 'flexColumn stretchSelf',
    },
    contactBody: {
        composes: 'flexRow stretchSelf',
        marginTop: theme.spacing(12),
    },
    form: {
        flex: 2,
    },
    details: {
        flex: 1,
    },
    subtitle: {
        fontSize: 24,
        lineHeight: 1.4,
        width: '50%',
        marginTop: theme.spacing(2),
    },
}));

const Contact = () => {
    const classes = useStyles();

    return (
        <Layout className={classes.contact}>
            <div className={classes.contactTitle}>
                <MainTitle text="Avez-vous un projet à l'esprit?" />
                <Title
                    text="Vous recherchez un designer ou un développeur ? Laissez-moi un message, je vous répondrai rapidement !"
                    level={4}
                    className={classes.subtitle}
                />
            </div>
            <div className={classes.contactBody}>
                <Details className={classes.details} />
                <Form className={classes.form} />
            </div>
        </Layout>
    );
};
export default Contact;
