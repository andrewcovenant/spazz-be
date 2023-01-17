import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Meal } from './meal.model';

@Injectable()
export class MealService {
  constructor(
    @InjectModel('Meal')
    private readonly mealModel: Model<Meal>,
  ) {}

  async insertMeal(
    restaurantId: string,
    name: string,
    image: string,
    description: string,
    price: number,
    currency: string,
  ): Promise<string> {
    const newMeal = new this.mealModel({
      restaurantId,
      name,
      image,
      description,
      price,
      currency,
    });
    const res = await newMeal.save();
    return res.id;
  }

  // fetch all meals for a restaurant
  async fetchAllMeals(restaurantId: string): Promise<Meal[]> {
    const res = await this.mealModel.find({ restaurantId }).exec();
    return res;
  }
}
