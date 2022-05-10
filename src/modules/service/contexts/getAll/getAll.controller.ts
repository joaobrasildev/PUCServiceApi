import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiFoundResponse, ApiTags } from '@nestjs/swagger';
import { instanceToInstance } from 'class-transformer';
import { GetAllServiceService } from './getAll.service';
import { apiTags } from '@shared/constants/apiTags';
import { Service } from '@shared/database/entities/service.entity';

@ApiTags(apiTags.SERVICES)
@Controller('services')
export class GetAllServiceController {
  constructor(private service: GetAllServiceService) {}
  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiFoundResponse({
    type: Service,
  })
  public async getAll() {
    const services = await this.service.execute();

    return instanceToInstance(services);
  }
}
