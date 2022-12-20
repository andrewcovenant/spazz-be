import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot(
      //To do: Use ENV variables for security; this is just for testing
      'mongodb+srv://andrewcovenant:ZNs8wZDRVmesniUD@cluster0.n57u2pe.mongodb.net/spazz?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
