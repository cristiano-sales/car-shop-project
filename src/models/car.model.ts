import { model as mongooseCreateModel, Schema } from 'mongoose';
import { ICar } from '../interfaces/ICar';
import MongoModel from './mongo.model';

const carMongooseSchema = new Schema<ICar>({
  buyValue: Number,
  color: String,
  doorsQty: Number,
  model: String,
  seatsQty: Number,
  status: Boolean,
  year: Number,
}, { versionKey: false });

class Car extends MongoModel<ICar> {
  constructor(model = mongooseCreateModel('Car', carMongooseSchema)) {
    super(model);
  }
}

export default Car;
