import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';
import { media } from '../../utils/constants';

const useStyles = createUseStyles((theme: any) => ({
    fullColumn: {
        composes: 'flexColumn',
    },
    root: {
        composes: '$fullColumn center',
    },
    content: {
        composes: '$fullColumn alignCenter font-Montserrat-light',
        lineHeight: 1.6,
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
        [media.lgUp]: {
            width: '60%',
        },
    },
}));

const Content: FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.content}>
                {`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.`}
            </div>
        </div>
    );
};

export default Content;
