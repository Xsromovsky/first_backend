"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cars = void 0;
class Cars {
    constructor(name, brand, type, year, color, price, power) {
        this.name = name;
        this.brand = brand;
        this.type = type;
        this.year = year;
        this.color = color;
        this.price = price;
        this.power = power;
        this.id = Math.random().toString(36).substring(2, 9); // Generating a simple unique ID
    }
}
exports.Cars = Cars;
