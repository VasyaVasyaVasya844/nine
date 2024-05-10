// BEGIN
const make = (numer = 0, denom = 1) => {
    let numerator = numer;
    let denominator = denom;

    const setNumer = n => {
        numerator = n;
    };

    const setDenom = d => {
        if (d === 0) {
            throw new Error('Знаменатель не может быть равен нулю');
        }
        denominator = d;
    };

    const getNumer = () => numerator;

    const getDenom = () => denominator;

    const toString = () => `${numerator}/${denominator}`;

    const add = other => {
        const newNumer = numerator * other.getDenom() + denominator * other.getNumer();
        const newDenom = denominator * other.getDenom();
        return make(newNumer, newDenom);
    };

    return {
        setNumer,
        setDenom,
        getNumer,
        getDenom,
        toString,
        add,
    };
};

export default make;
// END
