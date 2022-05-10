import { Body, Controller, HttpCode, HttpStatus, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';
import { instanceToInstance } from 'class-transformer';
import { CreateCategoryRequestDTO } from '@shared/dtos/category/createCategoryRequest.dto';
import { CreateCategoryService } from './create.service';
import { apiTags } from '@shared/constants/apiTags';
import { Category } from '@shared/database/entities/category.entity';

@ApiTags(apiTags.CATEGORIES)
@Controller('categories')
export class CreateCategoryController {
  constructor(private service: CreateCategoryService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  @ApiCreatedResponse({
    type: Category,
  })
  @ApiBadRequestResponse({
    description: 'This will be returned when has validation error',
  })
  public async create(
    @Body() dto: CreateCategoryRequestDTO,
  ) {
    const category = await this.service.execute(dto);

    return instanceToInstance(category);
  }
}
