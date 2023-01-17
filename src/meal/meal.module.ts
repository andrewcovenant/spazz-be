import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { MealController } from './meal.controller';
import { MealService } from './meal.service';
import { MealSchema } from './meal.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Meal', schema: MealSchema }])],
  controllers: [MealController],
  providers: [MealService],
})
export class MealModule {}
