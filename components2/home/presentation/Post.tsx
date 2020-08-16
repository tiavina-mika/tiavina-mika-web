import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

import { screenState } from '../../../reducers/appReducer';
import { postAnimation } from '../../../animations/presentation';

type Props = { text: string; className?: string; display?: boolean };
const Post: FC<Props> = ({ text, className, display }) => {
    const isMobile = useSelector(screenState);
    const Component = isMobile ? 'h5' : motion.h5;
    const otherProps = !isMobile ? postAnimation : {};

    if (!display) return null;

    return (
        <Component className={className} {...otherProps}>
            {text}
        </Component>
    );
};

export default Post;
