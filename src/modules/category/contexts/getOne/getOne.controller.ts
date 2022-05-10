import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { ApiFoundResponse, ApiTags } from '@nestjs/swagger';
import { instanceToInstance } from 'class-transformer';
import { GetOneCategoryService } from './getOne.service';
import { apiTags } from '@shared/constants/apiTags';
import { Category } from '@shared/database/entities/category.entity';

@ApiTags(apiTags.CATEGORIES)
@Controller('categories')
export class GetOneCategoryController {
  constructor(private service: GetOneCategoryService) {}
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiFoundResponse({
    type: Category,
  })
  async getOne(@Param('id') id: string) {
    const category = await this.service.execute(id);

    return instanceToInstance(category);
  }
}
