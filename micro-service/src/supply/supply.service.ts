import { Injectable } from '@nestjs/common';
import { CreateSupplyDto } from './dto/create-supply.dto';
import { Repository } from 'typeorm';
import { Supply } from './entities/supply.entity'
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class SupplyService {
  constructor(
  @InjectRepository(Supply)
  private readonly SupplyRepository: Repository<Supply>,
  ){}
  
  async create(createSupplyDto: CreateSupplyDto): Promise<CreateSupplyDto> {
    return  this.SupplyRepository.save(createSupplyDto);

  }

  async findAll(): Promise<CreateSupplyDto[]> {
    return await this.SupplyRepository.find();
  }

  async findOne(cpf_user: string): Promise<CreateSupplyDto[]> {
    return this.SupplyRepository.find({
      where: {
        cpf: cpf_user
      }
    })
  }

}
