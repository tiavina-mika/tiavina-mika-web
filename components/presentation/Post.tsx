import React, { FC } from 'react';

import { postAnimation } from '../../utils/animation';
import { motion } from 'framer-motion';

type Props = { text: string; className?: string };
const Post: FC<Props> = ({ text, className }) => {
    return (
        <motion.h5 className={className} {...postAnimation}>
            {text}
        </motion.h5>
    );
};

export default Post;
