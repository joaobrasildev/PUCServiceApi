import { Injectable, NotFoundException } from '@nestjs/common';
import { notFound } from '@shared/utils/errors';
import { ServiceRepository } from '@shared/repositories/service.repository';

@Injectable()
export class DeleteServiceService {
  constructor(private repository: ServiceRepository) {}

  async execute(id: string) {
    const service = await this.repository.findOneService(id);
    if(!service) {
      throw new NotFoundException(notFound('service'));
    }

    return this.repository.deleteService(id);
  }
}
