import { Injectable, NotFoundException } from '@nestjs/common';
import { ServiceRepository } from '@shared/repositories/service.repository';
import { ServiceUserRepository } from '@shared/repositories/serviceUser.repository';
import { notFound } from '@shared/utils/errors';

@Injectable()
export class GetOneServiceUserService {
  constructor(private repository: ServiceUserRepository) {}

  async execute(id: string) {
    const serviceUser = await this.repository.findOneServiceUser(id);
    if(!serviceUser) {
      throw new NotFoundException(notFound('service-user'));
    }
    
    return serviceUser;
  }
}
