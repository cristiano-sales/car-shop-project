import { Router } from 'express';
import CarModel from '../models/car.model';
import CarService from '../services/car.service';
import CarController from '../controllers/car.controller';
import validateCarFields from '../middlewares/validateCar.mid';

const router: Router = Router();

const carModel: CarModel = new CarModel();
const carService: CarService = new CarService(carModel);
const carController: CarController = new CarController(carService);

router.post('/', validateCarFields, (req, res) => (
  carController.create(req, res)
));

export default router;