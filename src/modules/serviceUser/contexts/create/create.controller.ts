import { Body, Controller, HttpCode, HttpStatus, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';
import { instanceToInstance } from 'class-transformer';
import { CreateServiceRequestDTO } from '@shared/dtos/service/createServiceRequest.dto';
import { CreateServiceUserService } from './create.service';
import { apiTags } from '@shared/constants/apiTags';
import { ServiceUser } from '@shared/database/entities/serviceUser.entity';
import { CreateServiceUserResquestDTO } from '@shared/dtos/serviceUser/createServiceUserRequest.dto';

@ApiTags(apiTags.SERVICE_USERS)
@Controller('service-users')
export class CreateServiceUserController {
  constructor(private service: CreateServiceUserService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  @ApiCreatedResponse({
    type: ServiceUser,
  })
  @ApiBadRequestResponse({
    description: 'This will be returned when has validation error',
  })
  public async create(
    @Body() dto: CreateServiceUserResquestDTO,
  ) {
    const serviceUser = await this.service.execute(dto);

    return instanceToInstance(serviceUser);
  }
}
