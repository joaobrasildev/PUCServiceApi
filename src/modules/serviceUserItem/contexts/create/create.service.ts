import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { alreadyExists, notFound } from '@shared/utils/errors';
import { ServiceUserRepository } from '@shared/repositories/serviceUser.repository';
import { ServiceUserItemRepository } from '@shared/repositories/serviceuserItem.repository';
import { CreateServiceUserItemRequestDTO } from '@shared/dtos/serviceUseritem/createServiceUserItemRequest.dto';

@Injectable()
export class CreateServiceUserItemService {
  constructor(
    @InjectRepository(ServiceUserItemRepository)
    private repository: ServiceUserItemRepository,
    @InjectRepository(ServiceUserRepository)
    private serviceUserRepository: ServiceUserRepository,

  ) {}

  async execute(dto: CreateServiceUserItemRequestDTO) {
    const findedServiceUser = await this.serviceUserRepository.findOneServiceUser(dto.serviceUserId);
    if (!findedServiceUser) {
      throw new NotFoundException(notFound('service-user'));
    }
    const findedServiceUserItem = await this.repository.findByServiceUserItem(dto.description, dto.serviceUserId);
    if (findedServiceUserItem) {
      throw new ConflictException(alreadyExists('service-user-item'));
    }

    return this.repository.createServiceuseritem(dto);;
  }
}
