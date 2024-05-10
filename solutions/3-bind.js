const bind = (obj, fn) => {
    return function boundFunction(...args) {
        return fn.apply(obj, args);
    };
};

export default bind;
