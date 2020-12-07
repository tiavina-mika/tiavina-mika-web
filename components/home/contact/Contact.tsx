import React from 'react';
import { createUseStyles } from 'react-jss';

import { media } from '../../../utils/constants';
import ContactForm from '../../shared/ContactForm';
import Layout from '../../shared/Layout';
import MainTitle from '../../shared/MainTitle';
import Title from '../../shared/Title';
import Details from './Details';

const useStyles = createUseStyles((theme: any) => ({
    contactRoot: {
        paddingBottom: theme.spacing(30),
    },
    contact: {
        composes: 'flexColumn stretchSelf',
    },
    contactTitle: {
        composes: 'flexColumn stretchSelf',
    },
    contactBody: {
        composes: 'flexRow stretchSelf',
        marginTop: theme.spacing(12),
        [media.mdDown]: {
            flexDirection: 'column',
            marginTop: theme.spacing(6),
        },
    },
    form: {
        flex: 2,
        [media.mdDown]: {
            marginTop: theme.spacing(4),
            alignSelf: 'stretch',
            flex: 1,
        },
        [media.smDown]: {
            flexDirection: 'column',
        },
    },
    details: {
        flex: 1,
    },
    subtitle: {
        fontSize: 24,
        lineHeight: 1.4,
        marginTop: theme.spacing(2),
        [media.smUp]: {
            width: '50%',
        },
    },
}));

const Contact = () => {
    const classes = useStyles();

    return (
        <Layout rootClassName={classes.contactRoot} className={classes.contact}>
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
                <ContactForm className={classes.form} />
            </div>
        </Layout>
    );
};
export default Contact;
