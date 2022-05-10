import { ApiProperty } from "@nestjs/swagger";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Service } from "./service.entity";
import { ServiceUserItem } from "./serviceUserItem.entity";

@Entity()
export class ServiceUser {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column({ type: 'decimal' })
  price: number

  @ApiProperty()
  @Column()
  chargeType: string;

  @ApiProperty()
  @Column({ nullable: false })
  postalCode: string;

  @ApiProperty()
  @Column({ nullable: false })
  street: string;

  @ApiProperty()
  @Column({ nullable: false })
  number: number;

  @ApiProperty()
  @Column({ nullable: false })
  complement: string;

  @ApiProperty()
  @Column({ nullable: false })
  neighborhood: string;

  @ApiProperty()
  @Column({ nullable: false })
  state: string;

  @ApiProperty()
  @Column({ nullable: false })
  city: string;

  @ApiProperty()
  @Column({ nullable: false, name: 'user_id' })
  userId: string;
  
  @ApiProperty()
  @Column({ nullable: false, name: 'service_id' })
  serviceId: string;  

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  public deletedAt: Date;

  @ManyToOne(() => Service, (service) => service.serviceUsers, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'service_id' })
  public service?: Service;  

  @OneToMany(() => ServiceUserItem, (serviceUserItem) => serviceUserItem.serviceUser)
  public serviceUserItems?: ServiceUserItem;    
}