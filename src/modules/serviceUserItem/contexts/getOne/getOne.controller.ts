import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { ApiFoundResponse, ApiTags } from '@nestjs/swagger';
import { instanceToInstance } from 'class-transformer';
import { GetOneServiceUserItemService } from './getOne.service';
import { apiTags } from '@shared/constants/apiTags';
import { ServiceUser } from '@shared/database/entities/serviceUser.entity';
import { ServiceUserItem } from '@shared/database/entities/serviceUserItem.entity';

@ApiTags(apiTags.SERVICE_USER_ITEMS)
@Controller('service-user-items')
export class GetOneServiceUserItemController {
  constructor(private service: GetOneServiceUserItemService) {}
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiFoundResponse({
    type: ServiceUserItem,
  })
  async getOne(@Param('id') id: string) {
    const serviceUserItem = await this.service.execute(id);

    return instanceToInstance(serviceUserItem);
  }
}
