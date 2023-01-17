import * as mongoose from 'mongoose';

export const RestaurantSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  image: {
    type: String,
  },
  address: {
    type: String,
  },
  rating: {
    type: Number,
  },
  cuisine: {
    type: String,
  },
  deliveryFee: {
    type: Number,
  },
  deliveryTime: {
    type: Number,
  },
  isGenius: {
    type: Boolean,
  },
});

export interface Restaurant {
  _id: null | string;
  name: string;
  image: string;
  address: string;
  rating: number;
  cuisine: string;
  deliveryFee: number;
  deliveryTime: number;
  isGenius: boolean;
}
