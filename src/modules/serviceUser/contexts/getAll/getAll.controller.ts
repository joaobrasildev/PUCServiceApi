import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiFoundResponse, ApiTags } from '@nestjs/swagger';
import { instanceToInstance } from 'class-transformer';
import { GetAllServiceUserService } from './getAll.service';
import { apiTags } from '@shared/constants/apiTags';
import { ServiceUser } from '@shared/database/entities/serviceUser.entity';

@ApiTags(apiTags.SERVICE_USERS)
@Controller('service-users')
export class GetAllServiceUserController {
  constructor(private service: GetAllServiceUserService) {}
  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiFoundResponse({
    type: ServiceUser,
  })
  public async getAll() {
    const serviceUsers = await this.service.execute();

    return instanceToInstance(serviceUsers);
  }
}
