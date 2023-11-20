"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCar = exports.updateCar = exports.createCar = exports.getCarById = exports.getAllCars = void 0;
let cars = [];
const getAllCars = () => {
    return cars;
};
exports.getAllCars = getAllCars;
const getCarById = (id) => {
    return cars.find(car => car.id === id);
};
exports.getCarById = getCarById;
const createCar = (newCar) => {
    cars.push(newCar);
    return newCar;
};
exports.createCar = createCar;
const updateCar = (id, carUpdate) => {
    const carIndex = cars.findIndex(car => car.id === id);
    if (carIndex > -1) {
        cars[carIndex] = Object.assign(Object.assign({}, cars[carIndex]), carUpdate);
        return cars[carIndex];
    }
    return undefined;
};
exports.updateCar = updateCar;
const deleteCar = (id) => {
    const carIndex = cars.findIndex(car => car.id === id);
    if (carIndex > -1) {
        cars.splice(carIndex, 1);
        return true;
    }
    return false;
};
exports.deleteCar = deleteCar;
