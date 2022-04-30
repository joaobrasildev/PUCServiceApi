import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { ApiFoundResponse, ApiTags } from '@nestjs/swagger';
import { instanceToInstance } from 'class-transformer';
import { GetOneServiceService } from './getOne.service';
import { apiTags } from '@shared/constants/apiTags';
import { Service } from '@shared/database/entities/service.entity';

@ApiTags(apiTags.SERVICES)
@Controller('services')
export class GetOneServiceController {
  constructor(private service: GetOneServiceService) {}
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiFoundResponse({
    type: Service,
  })
  async getOne(@Param('id') id: string) {
    const service = await this.service.execute(id);

    return instanceToInstance(service);
  }
}
