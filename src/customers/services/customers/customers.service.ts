import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
     users=[
        {   id:1,
            name:"prabhath",
            createdAt:new Date()
        }
    ]
    findCustomer(id:number){
       return this.users.find((user)=>user.id===id)
    }
}
