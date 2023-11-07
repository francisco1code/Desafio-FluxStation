import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SupplyService } from './supply.service';
import { CreateSupplyDto } from './dto/create-supply.dto';

@Controller('supply')
export class SupplyController {
  constructor(private readonly supplyService: SupplyService) {}

  @Post()
  create(@Body() createSupplyDto: CreateSupplyDto) {
    return this.supplyService.create(createSupplyDto);
  }

  @Get()
  async findAll(): Promise<CreateSupplyDto[]> {
    return this.supplyService.findAll();
  }

  @Get(':cpf')
  async find(@Param('cpf') cpf: string): Promise<any> {
    return this.supplyService.findOne(cpf);
  }

}
