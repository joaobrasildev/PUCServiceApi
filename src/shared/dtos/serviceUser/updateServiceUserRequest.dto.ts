import { ApiProperty } from "@nestjs/swagger";
import { IsEmpty, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID } from "class-validator";

export class UpdateServiceUserResquestDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID(4)  
  id: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  price?: number

  @ApiProperty()
  @IsOptional()
  @IsString()
  chargeType?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  postalCode?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  street?: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  number?: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  complement?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  neighborhood?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  state?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  city?: string;

  @ApiProperty()
  @IsEmpty()
  @IsOptional()
  @IsString()
  userId?: string;
  
  @ApiProperty()
  @IsEmpty()
  @IsOptional()
  @IsString()
  serviceId?: string;   
}