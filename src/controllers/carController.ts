import { Request, Response } from "express";
import * as carService from '../services/carService';
import { Car } from '../models/carModels';

export const getAllCars = (req: Request, res: Response) => {
    const cars = carService.getAllCars();
    res.status(200).json(cars);
};

export const getCarById = (req: Request, res: Response) => {
    const car = carService.getCarById(req.params.id);
    if (car) {
        res.status(200).json(car);
    }
    else {
        res.status(404).send({ message: "Car not found "});
    }
};

export const createCar = (req: Request, res: Response) => {
    const newCar: Car = {
        id: Math.random().toString(36).substring(2,9),
        ...req.body
    };
    const createdCar = carService.createCar(newCar);
    res.status(201).json(newCar);
};

export const updateCar = (req: Request, res: Response) => {
    const updatedCar = carService.updateCar(req.params.id, req.body);
    if(updatedCar){
        res.status(201).json(updatedCar);
    } else {
        res.status(404).send({ message: "Car not found "});
    }
};

export const deleteCar = (req: Request, res: Response) => {
    const isDeleted = carService.deleteCar(req.params.id);
    if(isDeleted){
        res.status(200).send({ message: "Car deleted succesfully "});
    } else {
        res.status(404).send({ message: "Car not found" });
    }
};