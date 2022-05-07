import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiBadRequestResponse, ApiTags } from '@nestjs/swagger';
import { instanceToInstance } from 'class-transformer';
import { CreateArchiveService } from './create.service';
import { apiTags } from '@shared/constants/apiTags';
import { CreateArchiveRequestDTO } from '@shared/dtos/archive/createArchiveRequest.dto';

@ApiTags(apiTags.ARCHIVE)
@Controller('archives')
export class CreateArchiveController {
  constructor(private service: CreateArchiveService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiBadRequestResponse({
    description: 'This will be returned when has validation error',
  })
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )  
  public async create(
    @Body() dto: CreateArchiveRequestDTO,
  ) {
    const archive = await this.service.execute(
      dto,
    );

    return instanceToInstance(archive);
  }
}
