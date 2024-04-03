// src/blog/dto/blog.dto.ts

import { ApiProperty } from '@nestjs/swagger';

export class BlogDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty({ required: false })
  blogImg?: string;

  @ApiProperty({ required: false })
  sourceRedirect?: string;
}
