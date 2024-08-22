import { Type } from "class-transformer";
import { IsNotEmpty, IsString, IsNumberString, Length,Matches,IsAlphanumeric} from "class-validator";
import { Admin } from "typeorm";

export class CreatePetDTO {
    @IsNotEmpty()
    name :string;

    @IsNotEmpty()
    age : number;

    @IsNotEmpty()
    type : string;

    @IsNotEmpty()
    ownerId : number;

    @IsNotEmpty()
    health : string;

}
export class UpdatePetDTO {
    
    @IsNotEmpty()
    id : number;

    @IsNotEmpty()
    name : string;

    //optionsl
    description? : string;
}

export class CreateUserDTO{
    @IsNotEmpty()
    @IsString()
    id : number;

    @IsNotEmpty()
    @IsString()
    username : string;

    @IsNotEmpty()
    password : string;

    @IsNotEmpty()
    address : string;

    @IsNotEmpty()
    first_name : string;   

    @IsNotEmpty()
    last_name : string;

    @IsNotEmpty()
    email : string;

    @IsNotEmpty()
    birthdate : string;

    @IsNotEmpty()
    age : string;

    @IsNotEmpty()
    phone : string;

    @IsNotEmpty()
    identification_number : string;

    @IsNotEmpty()
    laser_code : string;

    @IsNotEmpty()
    bank : string;

    @IsNotEmpty()
    bank_branch : string;

    @IsNotEmpty()
    @IsString()
    roles: string[];

    @IsNotEmpty()
    is_admin : boolean;
}
export class UpdateUserDTO{
    @IsNotEmpty()
    @IsString()
    id : number;

    @IsNotEmpty()
    @IsString()
    username : string;

    @IsNotEmpty()
    password : string;

    @IsNotEmpty()
    address : string;

    @IsNotEmpty()
    first_name : string;   

    @IsNotEmpty()
    last_name : string;

    @IsNotEmpty()
    email : string;

    @IsNotEmpty()
    birthdate : string;

    @IsNotEmpty()
    age : string;

    @IsNotEmpty()
    phone : string;

    @IsNotEmpty()
    identification_number : string;

    @IsNotEmpty()
    laser_code : string;

    @IsNotEmpty()
    bank : string;

    @IsNotEmpty()
    bank_branch : string;

    @IsNotEmpty()
    @IsString()
    roles: string[];

}

export class CreateAdminDTO{

    @IsNotEmpty()
    @IsAlphanumeric()
    @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,20}$/, { message: 'Password must contain at least one digit, one lowercase, and one uppercase letter.' })
    @Length(8, 20, { message: 'Password must be between 8 and 20 characters.' })
    password: string;
  
    @IsNotEmpty()
    @IsNumberString()
    @Length(10, 10, { message: 'Phone number must be exactly 10 digits.' })
    phone: string;

    @IsNotEmpty()
    username : string;

    @IsNotEmpty()
    Email : string;   

    @IsNotEmpty()
    @IsString()
    roles: string[];
} 

export class UpdateAdminDTO{
   
    @IsNotEmpty()
    @IsAlphanumeric()
    @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,20}$/, { message: 'Password must contain at least one digit, one lowercase, and one uppercase letter.' })
    @Length(8, 20, { message: 'Password must be between 8 and 20 characters.' })
    password: string;
  
    @IsNotEmpty()
    @IsNumberString()
    @Length(10, 10, { message: 'Phone number must be exactly 10 digits.' })
    phone: string;

    @IsNotEmpty()
    username : string;

    @IsNotEmpty()
    Email : string;   

    @IsNotEmpty()
    @IsString()
    roles: string[];
} 

export default class CreateSendNotification{
    @IsNotEmpty()
    @IsString()
    title:string;
    
    
}

export class CreateSendNotificationDto {
    @IsNotEmpty()
    @IsString()
    user: string; 

}