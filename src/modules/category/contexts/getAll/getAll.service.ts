import { Injectable } from '@nestjs/common';
import { CategoryRepository } from '@shared/repositories/category.repository';

@Injectable()
export class GetAllCategoryService {
  constructor(private repository: CategoryRepository) {}

  async execute() {
    return await this.repository.findAllCategory();
  }
}
