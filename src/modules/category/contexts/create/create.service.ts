import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { alreadyExists } from '@shared/utils/errors';
import { CategoryRepository } from '@shared/repositories/category.repository';
import { CreateCategoryRequestDTO } from '@shared/dtos/category/createCategoryRequest.dto';

@Injectable()
export class CreateCategoryService {
  constructor(
    @InjectRepository(CategoryRepository)
    private repository: CategoryRepository,
  ) {}

  async execute(dto: CreateCategoryRequestDTO) {
    const findedCategory = await this.repository.findByCategory(dto.name);
    if (findedCategory) {
      throw new ConflictException(alreadyExists('category'));
    }
    const role = await this.repository.createCategory(dto);

    return role;
  }
}
