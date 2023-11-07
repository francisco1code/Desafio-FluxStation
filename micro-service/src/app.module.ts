import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Supply } from './supply/entities/supply.entity';
import { SupplyController } from './supply/supply.controller';
import { SupplyService } from './supply/supply.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [Supply ],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Supply]),
  ],
  controllers: [SupplyController],
  providers: [SupplyService],
})
export class AppModule {}
