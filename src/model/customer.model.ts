import { Schema,Prop ,SchemaFactory} from "@nestjs/mongoose";

@Schema()
export class Customer{
@Prop({unique:true})
username:string

@Prop({unique:true,required:[true,'mobile number reuired']})
mobilenumber:string
}
export const customerSchema =SchemaFactory.createForClass(Customer)
