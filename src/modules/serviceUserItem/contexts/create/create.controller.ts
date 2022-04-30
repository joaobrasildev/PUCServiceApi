import { Body, Controller, HttpCode, HttpStatus, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';
import { instanceToInstance } from 'class-transformer';
import { CreateServiceUserItemService } from './create.service';
import { apiTags } from '@shared/constants/apiTags';
import { ServiceUserItem } from '@shared/database/entities/serviceUserItem.entity';
import { CreateServiceUserItemRequestDTO } from '@shared/dtos/serviceUseritem/createServiceUserItemRequest.dto';

@ApiTags(apiTags.SERVICE_USER_ITEMS)
@Controller('service-user-items')
export class CreateServiceUserItemController {
  constructor(private service: CreateServiceUserItemService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  @ApiCreatedResponse({
    type: ServiceUserItem,
  })
  @ApiBadRequestResponse({
    description: 'This will be returned when has validation error',
  })
  public async create(
    @Body() dto: CreateServiceUserItemRequestDTO,
  ) {
    const serviceUserItem = await this.service.execute(dto);

    return instanceToInstance(serviceUserItem);
  }
}
