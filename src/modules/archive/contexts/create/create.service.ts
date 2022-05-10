import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateArchiveRequestDTO } from '@shared/dtos/archive/createArchiveRequest.dto';
import { ArchiveRepository } from '@shared/repositories/archive.repository';

@Injectable()
export class CreateArchiveService {
  constructor(
    @InjectRepository(ArchiveRepository)
    private repository: ArchiveRepository,
  ) {}

  async execute(dto: CreateArchiveRequestDTO) {
    const archive = await this.repository.createArchive({
      userId: dto.userId,
      url: dto.url
    });

    return archive;
  }
}
