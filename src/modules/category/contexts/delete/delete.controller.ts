import {
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Param,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { apiTags } from '@shared/constants/apiTags';
import { DeleteCategoryService, } from './delete.service';

@ApiTags(apiTags.CATEGORIES)
@Controller('categories')
export class DeleteCategoryController {
  constructor(private service: DeleteCategoryService) {}
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  async active(@Param('id') id: string) {
    return await this.service.execute(id);
  }
}
