import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArchiveRepository } from '@shared/repositories/archive.repository';
import { CreateArchiveController } from './contexts/create/create.controller';
import { CreateArchiveService } from './contexts/create/create.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ArchiveRepository])
  ],
  providers: [CreateArchiveService],
  controllers: [CreateArchiveController],
})
export class ArchiveModule {}
