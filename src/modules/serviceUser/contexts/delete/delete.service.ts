import { Injectable, NotFoundException } from '@nestjs/common';
import { notFound } from '@shared/utils/errors';
import { ServiceRepository } from '@shared/repositories/service.repository';
import { ServiceUserRepository } from '@shared/repositories/serviceUser.repository';

@Injectable()
export class DeleteServiceUserService {
  constructor(private repository: ServiceUserRepository) {}

  async execute(id: string) {
    const service = await this.repository.findOneServiceUser(id);
    if(!service) {
      throw new NotFoundException(notFound('service-user'));
    }

    return this.repository.deleteServiceUser(id);
  }
}
