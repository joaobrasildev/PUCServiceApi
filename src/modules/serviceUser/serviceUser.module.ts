import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryRepository } from '@shared/repositories/category.repository';
import { ServiceRepository } from '@shared/repositories/service.repository';
import { ServiceUserRepository } from '@shared/repositories/serviceUser.repository';
import { CreateServiceUserController } from './contexts/create/create.controller';
import { CreateServiceUserService } from './contexts/create/create.service';
import { DeleteServiceUserController } from './contexts/delete/delete.controller';
import { DeleteServiceUserService } from './contexts/delete/delete.service';
import { GetAllServiceUserController } from './contexts/getAll/getAll.controller';
import { GetAllServiceUserService } from './contexts/getAll/getAll.service';
import { GetOneServiceUserController } from './contexts/getOne/getOne.controller';
import { GetOneServiceUserService } from './contexts/getOne/getOne.service';
import { UpdateServiceUserController } from './contexts/update/update.controller';
import { UpdateServiceUserService } from './contexts/update/update.service';


@Module({
  imports: [TypeOrmModule.forFeature([ServiceRepository, CategoryRepository, ServiceUserRepository])],
  providers: [
    CreateServiceUserService,
    GetOneServiceUserService,
    GetAllServiceUserService,
    DeleteServiceUserService,
    UpdateServiceUserService
  ],
  controllers: [
    CreateServiceUserController,
    GetOneServiceUserController,
    GetAllServiceUserController,
    DeleteServiceUserController,
    UpdateServiceUserController
  ],
})
export class ServiceUserModule {}
