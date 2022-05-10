import { Injectable } from '@nestjs/common';
import { ServiceRepository } from '@shared/repositories/service.repository';

@Injectable()
export class GetAllServiceService {
  constructor(private repository: ServiceRepository) {}

  async execute() {
    return this.repository.findAllService();
  }
}
