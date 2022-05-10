import { Injectable, NotFoundException } from '@nestjs/common';
import { notFound } from '@shared/utils/errors';
import { ServiceUserItemRepository } from '@shared/repositories/serviceuserItem.repository';

@Injectable()
export class DeleteServiceUserItemService {
  constructor(private repository: ServiceUserItemRepository) {}

  async execute(id: string) {
    const service = await this.repository.findOneServiceUserItem(id);
    if(!service) {
      throw new NotFoundException(notFound('service-user-item'));
    }

    return this.repository.deleteServiceUserItem(id);
  }
}
