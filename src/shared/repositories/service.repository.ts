import { Service } from "@shared/database/entities/service.entity";
import { GetOneDTO } from "shared/dtos/getOne.dto";
import { EntityRepository, Repository } from "typeorm";
import { CreateServiceDTO } from "@shared/dtos/service/createService.dto";

@EntityRepository(Service)
export class ServiceRepository extends Repository<Service> {
  async createService(dto: CreateServiceDTO): Promise<Service> {
    const service = await this.create(dto);
    return this.save(service);
  }
  async findByService(description: string): Promise<Service | undefined> {
    return this.findOne({ description });
  }

  async findOneService(id: string): Promise<Service | undefined> {
    return this.findOne({ id });
  }

  async findAllService(): Promise<Service[]> {
    return await this.find();
  }

  async deleteService(id: string): Promise<void> {
    this.delete(id);
  }  
}