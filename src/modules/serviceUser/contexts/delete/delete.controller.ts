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
import { DeleteServiceUserService, } from './delete.service';

@ApiTags(apiTags.SERVICE_USERS)
@Controller('service-users')
export class DeleteServiceUserController {
  constructor(private service: DeleteServiceUserService) {}
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
