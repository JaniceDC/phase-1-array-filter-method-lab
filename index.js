// Code your solution here
const findMatching = (drivers, string) => {
    const driverName = drivers.filter((result) => {
        return result.toUpperCase() === string.toUpperCase();

    });
    return driverName;
}

const fuzzyMatch = (drivers, string) => {
    const driverName = drivers.filter((result) => {
        return result[0] === string[0];
    });
    return driverName;
}

const matchName = (drivers, string) => {
    const driverName = drivers.filter((result) => {
        return result.name === string;
    });
    return driverName
}