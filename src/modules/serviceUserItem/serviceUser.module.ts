import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryRepository } from '@shared/repositories/category.repository';
import { ServiceRepository } from '@shared/repositories/service.repository';
import {  CreateServiceUserItemController } from './contexts/create/create.controller';
import { CreateServiceUserItemService } from './contexts/create/create.service';
import { DeleteServiceUserController } from './contexts/delete/delete.controller';
import { DeleteServiceUserItemService } from './contexts/delete/delete.service';
import {  GetAllServiceUserItemController } from './contexts/getAll/getAll.controller';
import { GetAllServiceUserItemService } from './contexts/getAll/getAll.service';
import {  GetOneServiceUserItemController } from './contexts/getOne/getOne.controller';
import { GetOneServiceUserItemService } from './contexts/getOne/getOne.service';
import {  UpdateServiceUserItemController } from './contexts/update/update.controller';
import { UpdateServiceUserItemService } from './contexts/update/update.service';


@Module({
  imports: [TypeOrmModule.forFeature([ServiceRepository, CategoryRepository])],
  providers: [
    CreateServiceUserItemService,
    GetOneServiceUserItemService,
    GetAllServiceUserItemService,
    DeleteServiceUserItemService,
    UpdateServiceUserItemService
  ],
  controllers: [
    CreateServiceUserItemController,
    GetOneServiceUserItemController,
    GetAllServiceUserItemController,
    DeleteServiceUserController,
    UpdateServiceUserItemController
  ],
})
export class ServiceUserItemModule {}
