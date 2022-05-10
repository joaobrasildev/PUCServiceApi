import { Injectable } from '@nestjs/common';
import { ServiceUserItemRepository } from '@shared/repositories/serviceuserItem.repository';

@Injectable()
export class GetAllServiceUserItemService {
  constructor(private repository: ServiceUserItemRepository) {}

  async execute() {
    return await this.repository.findAllServiceUserItem();
  }
}
