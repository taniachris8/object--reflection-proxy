import orderByProps from "../orderByProps.js";

const obj = {
    name: "мечник",
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
};

test("Testing if the function returns correct array", () => {
    const result = [
        { key: "name", value: "мечник" }, 
        { key: "level", value: 2 }, 
        { key: "attack", value: 80 }, 
        { key: "defence", value: 40 }, 
        { key: "health", value: 10 }, 
    ];
    expect(orderByProps(obj, ["name", "level"])).toEqual(result);
});


test("Testing if the original object didn't change", () => {
    const originalObj = {
        name: "мечник",
        health: 10,
        level: 2,
        attack: 80,
        defence: 40,
    };
    expect(obj).toEqual(originalObj);
});