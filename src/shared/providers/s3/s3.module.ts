import { Module } from '@nestjs/common';
import { S3Provider } from './s3.provider';

@Module({
  imports: [],
  providers: [S3Provider],
  exports: [S3Provider],
})
export class S3Module {}
