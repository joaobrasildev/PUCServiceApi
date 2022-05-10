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
import { DeleteServiceService, } from './delete.service';

@ApiTags(apiTags.SERVICES)
@Controller('services')
export class DeleteServiceController {
  constructor(private service: DeleteServiceService) {}
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
