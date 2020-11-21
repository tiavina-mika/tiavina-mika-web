import React from 'react';
import { createUseStyles } from 'react-jss';
import Layout from '../../shared/Layout';
import Text from '../../shared/Text';
import Title from '../../shared/Title';
import ProjectGrid from './ProjectGrid';

const useStyles = createUseStyles((theme: any) => ({
    projectsRoot: {
        composes: 'flexRow',
    },
    projectsContent: {
        composes: 'flexRow flex1',
    },
    left: {
        composes: 'flexColumn flex1 justifyCenter flexEnd',
        marginRight: theme.spacing(3),
    },
    right: {
        composes: 'flexColumn flex1 justifyCenter flexStart',
        marginLeft: theme.spacing(3),
    },
    blockTitle: {
        position: 'relative',
        composes: 'flexColumn',
        width: 580,
        paddingTop: theme.spacing(12),
        paddingBottom: theme.spacing(16),
    },
    blockTitleContent: {
        paddingLeft: theme.spacing(5),
    },
    blockDescription: {
        width: '80%',
    },
    block: {
        borderRadius: 10,
        transition: 'all .5s cubic-bezier(.19,1,.4,1)',
        width: 580,
        height: 590,
        backgroundColor: '#d3b589',
        marginBottom: theme.spacing(6),
    },
}));

// type Props = {
//     reverse?: boolean;
//     reverseIndex: number;
// };

const ProjectsGrid = () => {
    const classes = useStyles();

    return (
        <Layout className={classes.projectsRoot}>
            <div className={classes.projectsContent}>
                <div className={classes.left}>
                    <div className={classes.blockTitle}>
                        <div className={classes.blockTitleContent}>
                            <Title text="Some Title" level={2} />
                            <Text
                                className={classes.blockDescription}
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus metus non nunc tempor, eu ultricies mi euismod."
                                tagName="p"
                            />
                        </div>
                    </div>
                    <ProjectGrid />
                    {/* <div className={classes.block}>
                        <Title text="Block1" level={4} />
                    </div> */}
                </div>
                <div className={classes.right}>
                    {/* <div className={classes.block}>
                        <Title text="Block1" level={4} />
                    </div>
                    <div className={classes.block}>
                        <Title text="Block1" level={4} />
                    </div> */}
                </div>
            </div>
        </Layout>
    );
};
export default ProjectsGrid;
