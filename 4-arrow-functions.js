const each = (collection, callback) => {
    for (const item of collection) {
        callback.call(item);
    }
};

export default each;
