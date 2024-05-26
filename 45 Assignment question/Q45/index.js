"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function carsInformation(manufacturer, model, ...options) {
    let Car = {
        manufacturer,
        model
    };
    options.forEach(([key, value]) => {
        Car[key] = value;
    });
    return Car;
}
console.log(carsInformation("Toyota", "corolla", ["color", "Black"]));
console.log(carsInformation("Honda", "civc", ["year", 2023]));
