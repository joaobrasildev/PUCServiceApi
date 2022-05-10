import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiFoundResponse, ApiTags } from '@nestjs/swagger';
import { instanceToInstance } from 'class-transformer';
import { GetAllCategoryService } from './getAll.service';
import { apiTags } from '@shared/constants/apiTags';
import { Category } from '@shared/database/entities/category.entity';

@ApiTags(apiTags.CATEGORIES)
@Controller('categories')
export class GetAllCategoryController {
  constructor(private service: GetAllCategoryService) {}
  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiFoundResponse({
    type: Category,
  })
  public async getAll() {
    const categories = await this.service.execute();

    return instanceToInstance(categories);
  }
}
