export default function orderByProps(obj, targetPropsArr) {
    let resultArr = [];

    for (let item of targetPropsArr) {
        for (let prop in obj) {
            if (item.includes(prop)) {
                resultArr.push({ key: item, value: obj[prop] });
                delete obj[prop];
            }
        }
    }

    const sortedArr = Object.keys(obj).sort();

    for (let item of sortedArr) {
        for (let prop in obj) {
            if (item.includes(prop)) {
                resultArr.push({ key: item, value: obj[prop] });
            }
        }
    }

    return resultArr;
}
