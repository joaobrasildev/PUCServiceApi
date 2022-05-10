import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty,IsString } from "class-validator";

export class GetOneDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  id: string;
}