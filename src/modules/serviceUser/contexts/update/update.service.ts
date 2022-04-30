import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateServiceUserResquestDTO } from '@shared/dtos/serviceUser/updateServiceUserRequest.dto';
import { ServiceUserRepository } from '@shared/repositories/serviceUser.repository';
import { notFound } from '@shared/utils/errors';

@Injectable()
export class UpdateServiceUserService {
  constructor(private repository: ServiceUserRepository) {}
  async execute(dto: UpdateServiceUserResquestDTO) {
    const findedServiceUser = await this.repository.findOneServiceUser(
      dto.id,
    );

    if (!findedServiceUser) {
      throw new NotFoundException(notFound('service-user'));
    }

    await this.repository.updateServiceUser(dto);
  }
}
