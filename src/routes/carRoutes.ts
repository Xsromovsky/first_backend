

import * as express from 'express';
import { getAllCars, getCarById, createCar, deleteCar, updateCar } from '../controllers/carController';
import { syncBuiltinESMExports } from 'module';

const router = express.Router();

router.get('/', getAllCars);
router.get('/:id', getCarById);
router.post('/', createCar);
router.put('/:id', updateCar);
router.delete('/:id', deleteCar);

export default router;