import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Restaurant } from './restaurant.model';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectModel('Restaurant')
    private readonly restaurantModel: Model<Restaurant>,
  ) {}

  async insertRestaurant(
    name: string,
    image: string,
    address: string,
    cuisine: string,
    rating: number,
    deliveryFee: number,
    deliveryTime: number,
    isGenius: boolean,
  ): Promise<string> {
    const newRestaurant = new this.restaurantModel({
      name,
      image,
      address,
      cuisine,
      rating,
      deliveryFee,
      deliveryTime,
      isGenius,
    });
    const res = await newRestaurant.save();
    return res.id;
  }

  async fetchRestaurant(id: string): Promise<Restaurant> {
    const res = await this.restaurantModel.findById(id).exec();
    return res;
  }

  async fetchAllRestaurants(): Promise<Restaurant[]> {
    const res = await this.restaurantModel.find().exec();
    return res;
  }
}
