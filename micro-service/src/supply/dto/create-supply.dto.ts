import { IsNotEmpty } from "class-validator";

export class CreateSupplyDto {
    
    @IsNotEmpty()
    driver: string;
    
    @IsNotEmpty()
    cpf: string;

    @IsNotEmpty()
    type: string;

    @IsNotEmpty()
    amount: string;

    @IsNotEmpty()
    price: string;

    createdAt: Date;
}

