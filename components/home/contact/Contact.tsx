import React from 'react';
import { createUseStyles } from 'react-jss';

import Layout from '../../shared/Layout';

const useStyles = createUseStyles((theme: any) => ({
    contact: {
        composes: 'stretchSelf red',
    },
}));

const Contact = () => {
    const classes = useStyles();

    return (
        <Layout className={classes.contact}>
            Contact
        </Layout>
    );
};
export default Contact;
