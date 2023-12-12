import { Module } from '@nestjs/common';
import { CustomersModule } from './customers/customers.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [CustomersModule,MongooseModule.forRoot("mongodb://127.0.0.1/nest")],
  controllers: [],
  providers: [],
})
export class AppModule {}
