import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { ApiFoundResponse, ApiTags } from '@nestjs/swagger';
import { instanceToInstance } from 'class-transformer';
import { GetOneServiceUserService } from './getOne.service';
import { apiTags } from '@shared/constants/apiTags';
import { ServiceUser } from '@shared/database/entities/serviceUser.entity';

@ApiTags(apiTags.SERVICE_USERS)
@Controller('service-users')
export class GetOneServiceUserController {
  constructor(private service: GetOneServiceUserService) {}
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiFoundResponse({
    type: ServiceUser,
  })
  async getOne(@Param('id') id: string) {
    const serviceUser = await this.service.execute(id);

    return instanceToInstance(serviceUser);
  }
}
