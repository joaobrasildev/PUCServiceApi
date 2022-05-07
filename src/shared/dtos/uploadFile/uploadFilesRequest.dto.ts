import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsOptional, IsUUID } from 'class-validator';
import { Column } from 'typeorm';

export class UploadFilesRequestDTO {
  @ApiProperty()
  @IsUUID(4, { each: true })
  @Column({ nullable: false })
  userId: string;

  @ApiProperty()
  @IsArray()
  @IsOptional()
  files?: Array<Express.Multer.File>;
}
