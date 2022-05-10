import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Column } from 'typeorm';

export class CreateCategoryRequestDTO {
  @ApiProperty()
  @Column({ nullable: false })
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @Column({ nullable: false })
  @IsNotEmpty()
  description: string;  
}
