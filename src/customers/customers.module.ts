import { Module } from '@nestjs/common';
import { CustomersController } from './controller/customers/customers.controller';
import { CustomersService } from './services/customers/customers.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Customer, customerSchema } from 'src/model/customer.model';
@Module({
  imports:[MongooseModule.forFeature([
    {
      name:Customer.name,
      schema:customerSchema,
    },
  ])],
  controllers: [CustomersController],
  providers: [CustomersService]
})
export class CustomersModule {}
