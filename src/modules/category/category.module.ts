import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryRepository } from '@shared/repositories/category.repository';
import { CreateCategoryController } from './contexts/create/create.controller';
import { CreateCategoryService } from './contexts/create/create.service';
import { DeleteCategoryController } from './contexts/delete/delete.controller';
import { DeleteCategoryService } from './contexts/delete/delete.service';
import { GetAllCategoryController } from './contexts/getAll/getAll.controller';
import { GetAllCategoryService } from './contexts/getAll/getAll.service';
import { GetOneCategoryController } from './contexts/getOne/getOne.controller';
import { GetOneCategoryService } from './contexts/getOne/getOne.service';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryRepository])],
  providers: [
    CreateCategoryService,
    GetOneCategoryService,
    GetAllCategoryService,
    DeleteCategoryService,
  ],
  controllers: [
    CreateCategoryController,
    GetOneCategoryController,
    GetAllCategoryController,
    DeleteCategoryController,
  ],
})
export class CategoryModule {}
