import { Injectable, NotFoundException } from '@nestjs/common';
import { ServiceRepository } from '@shared/repositories/service.repository';
import { notFound } from '@shared/utils/errors';

@Injectable()
export class GetOneServiceService {
  constructor(private repository: ServiceRepository) {}

  async execute(id: string) {
    const service = await this.repository.findOneService(id);
    if(!service) {
      throw new NotFoundException(notFound('service'));
    }
    
    return service;
  }
}
