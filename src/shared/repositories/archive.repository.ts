import { Archive } from '@shared/database/entities/archive.entity';
import { CreateArchiveDTO } from '@shared/dtos/archive/createArchive.dto';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Archive)
export class ArchiveRepository extends Repository<Archive> {
  async createArchive(dto: CreateArchiveDTO): Promise<Archive> {
    const archive = await this.create(dto);

    return this.save(archive);
  }
}
