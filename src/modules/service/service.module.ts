import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryRepository } from '@shared/repositories/category.repository';
import { ServiceRepository } from '@shared/repositories/service.repository';
import { CreateServiceController } from './contexts/create/create.controller';
import { CreateServiceService } from './contexts/create/create.service';
import { DeleteServiceController } from './contexts/delete/delete.controller';
import { DeleteServiceService } from './contexts/delete/delete.service';
import { GetAllServiceController } from './contexts/getAll/getAll.controller';
import { GetAllServiceService } from './contexts/getAll/getAll.service';
import { GetOneServiceController } from './contexts/getOne/getOne.controller';
import { GetOneServiceService } from './contexts/getOne/getOne.service';


@Module({
  imports: [TypeOrmModule.forFeature([ServiceRepository, CategoryRepository])],
  providers: [
    CreateServiceService,
    GetOneServiceService,
    GetAllServiceService,
    DeleteServiceService,
  ],
  controllers: [
    CreateServiceController,
    GetOneServiceController,
    GetAllServiceController,
    DeleteServiceController,
  ],
})
export class ServiceModule {}
