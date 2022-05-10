import { Injectable } from '@nestjs/common';
import { ServiceUserRepository } from '@shared/repositories/serviceUser.repository';

@Injectable()
export class GetAllServiceUserService {
  constructor(private repository: ServiceUserRepository) {}

  async execute() {
    return await this.repository.findAllServiceUser();
  }
}
