const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.5,
        }
    }
};

const item = {
    hidden: {
        opacity: 0, 
        x: "-150%"
    },
    show: {
        opacity: 1,
        x: 0,
    }
};

const title = {
    hidden: {
        opacity: 0, 
        translateX: -100
    },
    show: {
        opacity: 1, 
        translateX: 0,
        transition: {
            delay: 0.3, 
            duration: 1, 
            type: 'spring', 
            stiffness: 100, 
            damping: 6
        }
    }
};

export { container, item, title }