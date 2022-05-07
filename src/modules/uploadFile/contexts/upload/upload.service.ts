import { Inject, Injectable } from '@nestjs/common';
//import { AWSResponse } from '@shared/providers/s3/models/awsResponse.interface';
import { S3Provider } from '@shared/providers/s3/s3.provider';
import env from '@config/env';
import { InjectRepository } from '@nestjs/typeorm';
import { ArchiveRepository } from '@shared/repositories/archive.repository';
import { AWSResponse } from '@shared/providers/s3/models/awsResponse.interface';
//import { InjectRepository } from '@nestjs/typeorm';
//import { ArchiveRepository } from '@shared/repositories/archive.repository';

@Injectable()
export class UploadFileService {
  constructor(
    @Inject(S3Provider)
    private s3Provider: S3Provider,
    @InjectRepository(ArchiveRepository)
    private archiveRepository: ArchiveRepository
  ) {}

  async execute(
    userId: string,
    files: Array<Express.Multer.File>,
  ): Promise<AWSResponse[]> {
    const uploaded = await this.s3Provider.uploadManyFiles(
      files,
      env().s3Credentials.bucket,
      userId,
    );
    for (const item of uploaded) {
      await this.archiveRepository.createArchive({          
        url: item.toString(),
        userId: userId,
      });
    }
    return uploaded;
  }

}
