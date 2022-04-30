import { Body, Controller, HttpCode, HttpStatus, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';
import { instanceToInstance } from 'class-transformer';
import { CreateServiceRequestDTO } from '@shared/dtos/service/createServiceRequest.dto';
import { CreateServiceService } from './create.service';
import { apiTags } from '@shared/constants/apiTags';
import { Service } from '@shared/database/entities/service.entity';

@ApiTags(apiTags.SERVICES)
@Controller('services')
export class CreateServiceController {
  constructor(private service: CreateServiceService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  @ApiCreatedResponse({
    type: Service,
  })
  @ApiBadRequestResponse({
    description: 'This will be returned when has validation error',
  })
  public async create(
    @Body() dto: CreateServiceRequestDTO,
  ) {
    const service = await this.service.execute(dto);

    return instanceToInstance(service);
  }
}
