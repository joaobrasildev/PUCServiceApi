import { Injectable, NotFoundException } from '@nestjs/common';
import { CategoryRepository } from '@shared/repositories/category.repository';
import { notFound } from '@shared/utils/errors';

@Injectable()
export class GetOneCategoryService {
  constructor(private repository: CategoryRepository) {}

  async execute(id: string) {
    const category = await this.repository.findOneCategory(id);
    if(!category) {
      throw new NotFoundException(notFound('category'));
    }
    
    return category;
  }
}
