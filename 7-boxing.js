// BEGIN
const magic = (...args) => {
    const sum = args.reduce((acc, curr) => acc + curr, 0);
    const innerMagic = (...innerArgs) => magic(sum, ...innerArgs);
    innerMagic.valueOf = () => sum;
    return innerMagic;
};

export default magic;
// END
