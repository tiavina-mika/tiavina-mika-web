const variants = {
    hidden: { y: 100 },
    visible: {
        y: 0,
    },
};
const transition = {
    duration: 1,
};

export const onEnterAnimation = (start) => ({
    animate: start ? 'visible' : 'hidden',
    variants,
    transition,
});
