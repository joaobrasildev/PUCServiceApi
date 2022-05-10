import { ApiProperty } from "@nestjs/swagger";
import { IsEmpty, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID } from "class-validator";

export class UpdateServiceUserItemResquestDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID(4)  
  id: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  description?: string

  @ApiProperty()
  @IsEmpty()
  @IsOptional()
  @IsString()
  serviceUserId?: string;
}