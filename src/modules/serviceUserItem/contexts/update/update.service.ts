import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateServiceUserItemResquestDTO } from '@shared/dtos/serviceUseritem/updateServiceUserItemRequest.dto';
import { ServiceUserItemRepository } from '@shared/repositories/serviceuserItem.repository';
import { notFound } from '@shared/utils/errors';

@Injectable()
export class UpdateServiceUserItemService {
  constructor(private repository: ServiceUserItemRepository) {}
  async execute(dto: UpdateServiceUserItemResquestDTO) {
    const findedServiceUserItem = await this.repository.findOneServiceUserItem(
      dto.id,
    );
    if (!findedServiceUserItem) {
      throw new NotFoundException(notFound('service-user-item'));
    }

    await this.repository.updateServiceUserItem(dto);
  }
}
