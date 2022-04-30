import { ServiceUser } from "@shared/database/entities/serviceUser.entity";
import { GetOneDTO } from "shared/dtos/getOne.dto";
import { EntityRepository, Repository } from "typeorm";
import { CreateServiceUserDTO } from "@shared/dtos/serviceUser/createServiceUser.dto";
import { UpdateServiceUserResquestDTO } from "@shared/dtos/serviceUser/updateServiceUserRequest.dto";

@EntityRepository(ServiceUser)
export class ServiceUserRepository extends Repository<ServiceUser> {
  async createServiceUser(dto: CreateServiceUserDTO): Promise<ServiceUser> {
    const serviceUser = await this.create(dto);
    return this.save(serviceUser);
  }
  async findByServiceUser(userId: string, serviceId: string): Promise<ServiceUser | undefined> {
    return this.findOne({ userId, serviceId});
  }

  async findOneServiceUser(id: string): Promise<ServiceUser | undefined> {
    return this.findOne({ id });
  }

  async findAllServiceUser(): Promise<ServiceUser[]> {
    return await this.find();
  }

  async deleteServiceUser(id: string): Promise<void> {
    this.delete(id);
  }  

  async updateServiceUser(dto: UpdateServiceUserResquestDTO): Promise<void> {
    await this.update(dto.id, dto);
  }  
}