import { EntityRepository, Repository } from "typeorm";
import { CreateServiceUserItemDTO } from "@shared/dtos/serviceUseritem/createServiceUserItem.dto";
import { ServiceUserItem } from "@shared/database/entities/serviceUserItem.entity";
import { UpdateServiceUserItemResquestDTO } from "@shared/dtos/serviceUseritem/updateServiceUserItemRequest.dto";

@EntityRepository(ServiceUserItem)
export class ServiceUserItemRepository extends Repository<ServiceUserItem> {
  async createServiceuseritem(dto: CreateServiceUserItemDTO): Promise<ServiceUserItem> {
    const serviceUserItem = await this.create(dto);
    return this.save(serviceUserItem);
  }
  async findByServiceUserItem(description: string, serviceUserId: string): Promise<ServiceUserItem | undefined> {
    return this.findOne({ description, serviceUserId });
  }

  async findOneServiceUserItem(id: string): Promise<ServiceUserItem | undefined> {
    return this.findOne({ id });
  }

  async findAllServiceUserItem(): Promise<ServiceUserItem[]> {
    return await this.find();
  }

  async deleteServiceUserItem(id: string): Promise<void> {
    this.delete(id);
  }  

  async updateServiceUserItem(dto: UpdateServiceUserItemResquestDTO): Promise<void> {
    await this.update(dto.id, dto);
  }  
}