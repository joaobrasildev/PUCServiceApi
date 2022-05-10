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
import {  UpdateServiceUserService } from './update.service';
import { apiTags } from '@shared/constants/apiTags';

import { UpdateServiceUserResquestDTO } from '@shared/dtos/serviceUser/updateServiceUserRequest.dto';

@ApiTags(apiTags.SERVICE_USERS)
@Controller('service-users')
export class UpdateServiceUserController {
  constructor(private service: UpdateServiceUserService) {}

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
    @Body() dto: UpdateServiceUserResquestDTO,
  ) {
    await this.service.execute(dto);
  }
}
