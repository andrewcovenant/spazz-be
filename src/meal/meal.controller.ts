import {
  Controller,
  Post,
  Get,
  Delete,
  Patch,
  Body,
  Param,
  Put,
  Query,
} from '@nestjs/common';
import { MealService } from './meal.service';
import { Meal } from './meal.model';

@Controller('meal')
export class MealController {
  constructor(private readonly mealService: MealService) {}

  @Post()
  async addMeal(@Body() meal: Meal) {
    const newMealId = await this.mealService.insertMeal(
      meal.restaurantId,
      meal.name,
      meal.image,
      meal.description,
      meal.price,
      meal.currency,
    );

    return { id: newMealId };
  }

  @Get(':id')
  async getUser(@Param('id') id: string) {
    const meal = await this.mealService.fetchAllMeals(id);
    const meals = meal.map((meal) => {
      return {
        id: meal._id,
        restaurantId: meal.restaurantId,
        name: meal.name,
        image: meal.image,
        description: meal.description,
        price: meal.price,
        currency: meal.currency,
      };
    });
    return meals;
  }
}

// To to: Implement the rest of the CRUDS; delete, update, put, patch.
