import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiFoundResponse, ApiTags } from '@nestjs/swagger';
import { instanceToInstance } from 'class-transformer';
import { GetAllServiceUserItemService } from './getAll.service';
import { apiTags } from '@shared/constants/apiTags';
import { ServiceUserItem } from '@shared/database/entities/serviceUserItem.entity';

@ApiTags(apiTags.SERVICE_USER_ITEMS)
@Controller('service-user-items')
export class GetAllServiceUserItemController {
  constructor(private service: GetAllServiceUserItemService) {}
  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiFoundResponse({
    type: ServiceUserItem,
  })
  public async getAll() {
    const serviceUserItems = await this.service.execute();

    return instanceToInstance(serviceUserItems);
  }
}
