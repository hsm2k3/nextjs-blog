export const navVariants = {
    hidden: {
        opacity: 0,
        x: -50, // Update y: -50 to x: -50
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 140,
        },
    },
    show: {
        opacity: 1,
        x: 0, // Update y: 0 to x: 0
        transition: {
            type: 'spring',
            stiffness: 80,
            delay: 1,
        },
    },
};

export const burstVariants = {
    initial: {
        scale: 0,
        opacity: 0,
    },
    burst: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};