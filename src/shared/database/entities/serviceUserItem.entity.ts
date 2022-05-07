import { ApiProperty } from "@nestjs/swagger";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ServiceUser } from "./serviceUser.entity";

@Entity()
export class ServiceUserItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column()
  description: string;

  @ApiProperty()
  @Column({ nullable: false, name:  'service_user_id'})
  serviceUserId: string;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  public deletedAt: Date;

  @ManyToOne(() => ServiceUser, (serviceUser) => serviceUser.serviceUserItems, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'service_user_id' })
  public serviceUser?: ServiceUser;   
}