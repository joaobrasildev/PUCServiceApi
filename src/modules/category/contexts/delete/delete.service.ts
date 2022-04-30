import { Injectable, NotFoundException } from '@nestjs/common';
import { notFound } from '@shared/utils/errors';
import { CategoryRepository } from '@shared/repositories/category.repository';
import { GetOneDTO } from '@shared/dtos/getOne.dto';

@Injectable()
export class DeleteCategoryService {
  constructor(private repository: CategoryRepository) {}

  async execute(id: string) {
    const category = await this.repository.findOneCategory(id);
    if(!category) {
      throw new NotFoundException(notFound('category'));
    }

    return this.repository.deleteCategory(id);
  }
}
