import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Patch,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiNoContentResponse,
  ApiTags,
} from '@nestjs/swagger';
import {  UpdateServiceUserItemService } from './update.service';
import { apiTags } from '@shared/constants/apiTags';
import { UpdateServiceUserItemResquestDTO } from '@shared/dtos/serviceUseritem/updateServiceUserItemRequest.dto';

@ApiTags(apiTags.SERVICE_USER_ITEMS)
@Controller('service-user-items')
export class UpdateServiceUserItemController {
  constructor(private service: UpdateServiceUserItemService) {}

  @Patch()
  @HttpCode(HttpStatus.NO_CONTENT)
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  @ApiNoContentResponse()
  @ApiBadRequestResponse({
    description: 'This will be returned when has validation error',
  })
  public async update(
    @Body() dto: UpdateServiceUserItemResquestDTO,
  ) {
    await this.service.execute(dto);
  }
}
