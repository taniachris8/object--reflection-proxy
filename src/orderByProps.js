export default function orderByProps(obj, targetPropsArr) {
    let resultArr = [];
    const copyOfObj = { ...obj };

    for (let key of targetPropsArr) {
        for (let prop in copyOfObj) {
            if (key === prop) {
                resultArr.push({ key: prop, value: copyOfObj[prop] });
                delete copyOfObj[prop];
            }
        }
    }

    const remainingPropsArr = Object.keys(copyOfObj).sort();

    for (let key of remainingPropsArr) {
        for (let prop in copyOfObj) {
            if (key === prop) {
                resultArr.push({ key: prop, value: copyOfObj[prop] });
            }
        }
    }

    return resultArr;
}
