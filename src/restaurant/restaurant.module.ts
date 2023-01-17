import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { RestaurantController } from './restaurant.controller';
import { RestaurantService } from './restaurant.service';
import { RestaurantSchema } from './restaurant.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Restaurant', schema: RestaurantSchema },
    ]),
  ],
  controllers: [RestaurantController],
  providers: [RestaurantService],
})
export class RestaurantModule {}
