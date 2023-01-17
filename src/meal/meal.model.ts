import * as mongoose from 'mongoose';

export const MealSchema = new mongoose.Schema({
  restaurantId: {
    type: String,
  },
  name: {
    type: String,
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
  },
  currency: {
    type: String,
  },
  description: {
    type: String,
  },
});

export interface Meal {
  _id: string | null;
  restaurantId: string;
  name: string;
  image: string;
  price: number;
  currency: string;
  description: string;
}
