import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { alreadyExists, notFound } from '@shared/utils/errors';
import { ServiceUserRepository } from '@shared/repositories/serviceUser.repository';
import { CreateServiceUserResquestDTO } from '@shared/dtos/serviceUser/createServiceUserRequest.dto';
import { ServiceRepository } from '@shared/repositories/service.repository';

@Injectable()
export class CreateServiceUserService {
  constructor(
    @InjectRepository(ServiceUserRepository)
    private repository: ServiceUserRepository,
    @InjectRepository(ServiceRepository)
    private serviceRepository: ServiceRepository,

  ) {}

  async execute(dto: CreateServiceUserResquestDTO) {
    const findedService = await this.serviceRepository.findOneService(dto.serviceId);
    if (!findedService) {
      throw new NotFoundException(notFound('service'));
    }
    const findedServiceUser = await this.repository.findByServiceUser(dto.userId, dto.serviceId);
    if (findedServiceUser) {
      throw new ConflictException(alreadyExists('service-user'));
    }

    return this.repository.createServiceUser(dto);;
  }
}
