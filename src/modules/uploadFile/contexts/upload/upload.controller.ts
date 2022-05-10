import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UploadedFiles,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { apiTags } from '@shared/constants/apiTags';
import { UploadFilesRequestDTO } from '@shared/dtos/uploadFile/uploadFilesRequest.dto';
import { UploadFileService } from './upload.service';

@ApiTags(apiTags.UPLOAD_FILE)
@Controller('upload')
export class UploadFileController {
  constructor(private service: UploadFileService) {}
  @Post('files')
  @HttpCode(HttpStatus.OK)
  @UseInterceptors(AnyFilesInterceptor())
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )  
  async uploadFile(
    @Body() dto: UploadFilesRequestDTO,
    @UploadedFiles() files: Array<Express.Multer.File>
  ) {
    const response = await this.service.execute(
      dto.userId,
      files
    );
    
    return response
  }
}
