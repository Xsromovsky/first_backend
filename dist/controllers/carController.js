"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCar = exports.updateCar = exports.createCar = exports.getCarById = exports.getAllCars = void 0;
const carService = __importStar(require("../services/carService"));
const getAllCars = (req, res) => {
    const cars = carService.getAllCars();
    res.status(200).json(cars);
};
exports.getAllCars = getAllCars;
const getCarById = (req, res) => {
    const car = carService.getCarById(req.params.id);
    if (car) {
        res.status(200).json(car);
    }
    else {
        res.status(404).send({ message: "Car not found " });
    }
};
exports.getCarById = getCarById;
const createCar = (req, res) => {
    const newCar = Object.assign({ id: Math.random().toString(36).substring(2, 9) }, req.body);
    const createdCar = carService.createCar(newCar);
    res.status(201).json(newCar);
};
exports.createCar = createCar;
const updateCar = (req, res) => {
    const updatedCar = carService.updateCar(req.params.id, req.body);
    if (updatedCar) {
        res.status(201).json(updatedCar);
    }
    else {
        res.status(404).send({ message: "Car not found " });
    }
};
exports.updateCar = updateCar;
const deleteCar = (req, res) => {
    const isDeleted = carService.deleteCar(req.params.id);
    if (isDeleted) {
        res.status(200).send({ message: "Car deleted succesfully " });
    }
    else {
        res.status(404).send({ message: "Car not found" });
    }
};
exports.deleteCar = deleteCar;
