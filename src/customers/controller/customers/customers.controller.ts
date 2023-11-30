import { Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Req, Res } from '@nestjs/common';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
    constructor(private customersSerivice:CustomersService){}
    @Get(':id')
        getCustomers(@Param('id',ParseIntPipe) id:number)
        {
             
        const user =this.customersSerivice.findCustomer(id)
        if(!user){
            throw new HttpException("Customer not Found",HttpStatus.NOT_FOUND)
        } 
        return user
        }
    
}
