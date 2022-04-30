import { CategoryModule } from '@modules/category/category.module';
import { ServiceModule } from '@modules/service/service.module';
import { ServiceUserModule } from '@modules/serviceUser/serviceUser.module';
import { ServiceUserItemModule } from '@modules/serviceUserItem/serviceUser.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
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
    ServiceUserItemModule
  ],
})
export class AppModule {}
