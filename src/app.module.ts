import { ArchiveModule } from '@modules/archive/archive.module';
import { CategoryModule } from '@modules/category/category.module';
import { ServiceModule } from '@modules/service/service.module';
import { ServiceUserModule } from '@modules/serviceUser/serviceUser.module';
import { ServiceUserItemModule } from '@modules/serviceUserItem/serviceUser.module';
import { UploadModule } from '@modules/uploadFile/upload.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { S3Module } from '@shared/providers/s3/s3.module';
import envConfig from './config/env';
import { getDatabaseConfigConnection } from './config/env/connection';

const databaseOptions = {
  ...getDatabaseConfigConnection(),
};
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [envConfig],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(databaseOptions),
    CategoryModule,
    ServiceModule,
    ServiceUserModule,
    ServiceUserItemModule,
    S3Module,
    UploadModule,
    ArchiveModule
  ],
})
export class AppModule {}
