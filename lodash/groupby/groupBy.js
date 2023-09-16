const groupBy = (data, keyToGroup) => {
    return data.reduce((acc, next) => {
        const key = typeof keyToGroup === 'function' ? keyToGroup(next) : next[keyToGroup];

        if (acc[key]) {
            acc[key] = [...acc[key], next];
        } else {
            acc[key] = [next];
        }
        return acc;
    }, {});
};