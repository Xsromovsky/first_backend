import { Car } from '../models/carModels';

let cars: Car[] = [];

export const getAllCars = (): Car[] => {
    return cars;
};

export const getCarById = (id: string): Car | undefined => {
    return cars.find(car => car.id === id);
};

export const createCar = (newCar: Car): Car => {
    cars.push(newCar);
    return newCar;
};

export const updateCar = (id: string, carUpdate: Car): Car | undefined => {
    const carIndex = cars.findIndex(car => car.id === id);
    if (carIndex > -1){
        cars[carIndex] = { ...cars[carIndex], ...carUpdate};
        return cars[carIndex];
    }
    return undefined;
};

export const deleteCar = (id: string): boolean => {
    const carIndex = cars.findIndex(car => car.id === id);
    if(carIndex > -1){
        cars.splice(carIndex, 1);
        return true;
    }
    return false;
}