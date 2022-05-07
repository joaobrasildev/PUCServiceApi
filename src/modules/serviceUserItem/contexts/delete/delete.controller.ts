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
import { DeleteServiceUserItemService, } from './delete.service';

@ApiTags(apiTags.SERVICE_USER_ITEMS)
@Controller('service-user-items')
export class DeleteServiceUserItemController {
  constructor(private service: DeleteServiceUserItemService) {}
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
