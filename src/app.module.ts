import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MealModule } from './meal/meal.module';
import { RestaurantModule } from './restaurant/restaurant.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UserModule,
    AuthModule,
    RestaurantModule,
    MealModule,
    MongooseModule.forRoot(
      'mongodb+srv://' +
        process.env.MONGO_USERNAME +
        ':' +
        process.env.MONGO_PASSWORD +
        '@cluster0.n57u2pe.mongodb.net/spazz?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
