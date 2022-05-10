import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { alreadyExists, notFound } from '@shared/utils/errors';
import { ServiceRepository } from '@shared/repositories/service.repository';
import { CreateServiceRequestDTO } from '@shared/dtos/service/createServiceRequest.dto';
import { CategoryRepository } from '@shared/repositories/category.repository';

@Injectable()
export class CreateServiceService {
  constructor(
    @InjectRepository(ServiceRepository)
    private repository: ServiceRepository,
    @InjectRepository(CategoryRepository)
    private categoryRepository: CategoryRepository,

  ) {}

  async execute(dto: CreateServiceRequestDTO) {
    const findedService = await this.repository.findByService(dto.description);
    if (findedService) {
      throw new ConflictException(alreadyExists('service'));
    }
    const findedCategory = await this.categoryRepository.findOneCategory(dto.categoryId)
    if (!findedCategory) {
      throw new NotFoundException(notFound('category'));
    }    

    return this.repository.createService(dto);
  }
}
