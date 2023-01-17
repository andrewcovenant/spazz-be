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
import { RestaurantService } from './restaurant.service';
import { Restaurant } from './restaurant.model';

@Controller('restaurant')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Post()
  async addRestaurant(@Body() restaurant: Restaurant) {
    const newRestaurantId = await this.restaurantService.insertRestaurant(
      restaurant.name,
      restaurant.image,
      restaurant.address,
      restaurant.cuisine,
      restaurant.rating,
      restaurant.deliveryFee,
      restaurant.deliveryTime,
      restaurant.isGenius,
    );
    return { id: newRestaurantId };
  }

  @Get('all')
  async getRestaurant() {
    const restaurants = await this.restaurantService.fetchAllRestaurants();
    return restaurants.map((restaurant) => {
      return {
        id: restaurant._id,
        name: restaurant.name,
        image: restaurant.image,
        address: restaurant.address,
        cuisine: restaurant.cuisine,
        rating: restaurant.rating,
        deliveryFee: restaurant.deliveryFee,
        deliveryTime: restaurant.deliveryTime,
        isGenius: restaurant.isGenius,
      };
    });
  }

  @Get(':id')
  async getUser(@Param('id') id: string) {
    const restaurant = await this.restaurantService.fetchRestaurant(id);
    return {
      id: restaurant._id,
      name: restaurant.name,
      image: restaurant.image,
      address: restaurant.address,
      cuisine: restaurant.cuisine,
      rating: restaurant.rating,
      deliveryFee: restaurant.deliveryFee,
      deliveryTime: restaurant.deliveryTime,
      isGenius: restaurant.isGenius,
    };
  }
}

// To to: Implement the rest of the CRUDS; delete, update, put, patch.
