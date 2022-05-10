import { ApiProperty } from '@nestjs/swagger';

import { Column } from 'typeorm';

export class CreateArchiveDTO {
  @ApiProperty()
  @Column({ nullable: false })
  url: string;

  @ApiProperty()
  @Column()
  userId: string;
}
