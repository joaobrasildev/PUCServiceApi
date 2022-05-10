import { Category } from "shared/database/entities/category.entity";
import { CreateCategoryDTO } from "shared/dtos/category/createCategory.dto";
import { GetOneDTO } from "shared/dtos/getOne.dto";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Category)
export class CategoryRepository extends Repository<Category> {
  async createCategory(dto: CreateCategoryDTO): Promise<Category> {
    const category = await this.create(dto);
    return this.save(category);
  }
  async findByCategory(name: string): Promise<Category | undefined> {
    return this.findOne({ name });
  }

  async findOneCategory(id: string): Promise<Category | undefined> {
    return this.findOne({ id });
  }

  async findAllCategory(): Promise<Category[]> {
    return await this.find();
  }

  async deleteCategory(id: string): Promise<void> {
    this.delete(id);
  }  
}