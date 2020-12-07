import React from 'react';
import { createUseStyles } from 'react-jss';
import { useWindowSize } from 'react-use';

import Text from './Text';
import { emailPerso } from '../../utils/texting';

const useStyles = createUseStyles((theme: any) => ({
    warning: {
        composes: 'flexRow stretchSelf justifyCenter',
        padding: 20,
        backgroundColor: 'red',
    },
    warningText: {
        color: '#fff',
    },
    emailLink: {
        color: theme.colors.active,
        marginLeft: theme.spacing(1),
    },
}));

const AlertMessage = () => {
    const size = useWindowSize();
    const classes = useStyles({ size });

    return (
        <div className={classes.warning}>
            <Text className={classes.warningText}>
                {`Le site est actuellement en cours de développement. Pour plus d'info veuillez`}
                <a href={'maito:' + emailPerso} className={classes.emailLink}>
                    me contacter
                </a>
            </Text>
        </div>
    );
};

export default AlertMessage;
