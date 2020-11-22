import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme: any) => ({
    secondary: { fill: '#bdefd1' },
    active: { fill: theme.colors.active },
    white: { fill: '#fff' },
}));
type Props = { active?: boolean };
const PerformanceIcon: FC<Props> = ({ active }) => {
    const classes = useStyles();

    return (
        <g id="img-2" data-name="img">
            <path
                className={active ? classes.white : classes.active}
                d="M316.64,567l-2.3-2.31c.42.07.71.1,1,.16l4.85,1a.66.66,0,0,1,.53.34c.53,2,1,4,1.55,6.18l-2.35-2.27c-.86.8-1.72,1.55-2.51,2.36-3.12,3.2-6.21,6.43-9.31,9.65a2.18,2.18,0,0,1-3.05.37h0q-4.53-2.91-9-5.86c-.22,0-.22-1-1.22,0-1.64,1.53-4,3-6.23,5a1.69,1.69,0,0,0-1,1.19,3.26,3.26,0,0,1-2.26,2.39,3.3,3.3,0,0,1-4.08-2.27,3.17,3.17,0,0,1-.07-1.53,3.1,3.1,0,0,1,3.23-2.57,1.89,1.89,0,0,0,1.23-.42q4-3.15,8.09-6.23A2.29,2.29,0,0,1,297,572l8.7,5.65c.43.28.14,1,2.14-1l8-8C316.81,567.63,317.81,567.63,316.64,567Zm-32.25,16.24a1.15,1.15,0,1,0-.05-2.3,1.15,1.15,0,0,0,.05,2.3Z"
            />
            <path
                className={classes.secondary}
                d="M314.19,579.87a3.57,3.57,0,0,1,.8,0,14.9,14.9,0,0,0,4.27.07c1.14-.19,1.44-.14,1.44.5v28h-6.5Z"
            />
            <path
                className={active ? classes.white : classes.active}
                d="M298.57,608.44h-6.46V582.08H298a.51.51,0,0,1,.54.49v25.31A1.76,1.76,0,0,1,298.57,608.44Z"
            />
            <path className={classes.secondary} d="M303.16,586.46h6c.42,0,.53.13.52.54v21.39h-6.5Z" />
            <path
                className={classes.secondary}
                d="M287.57,608.46h-6.48V588.72a2.15,2.15,0,0,1,.8,0,6.19,6.19,0,0,0,2.53.31c2.57-.35,3.16-.67,3.15.21v19.23Z"
            />
        </g>
    );
};

export default PerformanceIcon;
