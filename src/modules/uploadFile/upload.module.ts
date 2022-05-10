import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { S3Provider } from '@shared/providers/s3/s3.provider';
import { ArchiveRepository } from '@shared/repositories/archive.repository';
import { UploadFileController } from './contexts/upload/upload.controller';
import { UploadFileService } from './contexts/upload/upload.service';

@Module({
  imports: [
    S3Provider,
    TypeOrmModule.forFeature([ArchiveRepository]),
  ],
  providers: [UploadFileService, S3Provider],
  controllers: [UploadFileController],
})
export class UploadModule {}
