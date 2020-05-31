const variants = {
    hidden: { y: 50 },
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
