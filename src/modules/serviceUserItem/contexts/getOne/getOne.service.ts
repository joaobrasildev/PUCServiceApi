import { Injectable, NotFoundException } from '@nestjs/common';
import { ServiceUserItemRepository } from '@shared/repositories/serviceuserItem.repository';
import { notFound } from '@shared/utils/errors';

@Injectable()
export class GetOneServiceUserItemService {
  constructor(private repository: ServiceUserItemRepository) {}

  async execute(id: string) {
    const serviceUserItem = await this.repository.findOneServiceUserItem(id);
    if(!serviceUserItem) {
      throw new NotFoundException(notFound('service-user-item'));
    }
    
    return serviceUserItem;
  }
}
