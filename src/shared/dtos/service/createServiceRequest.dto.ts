import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';
import { Column } from 'typeorm';

export class CreateServiceRequestDTO {
  @ApiProperty()
  @Column({ nullable: false })
  @IsNotEmpty()
  @IsUUID(4)  
  categoryId: string;

  @ApiProperty()
  @Column({ nullable: false })
  @IsNotEmpty()
  description: string;  
}
