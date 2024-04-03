// src/blog/dto/create-blog.dto.ts

import { ApiProperty } from '@nestjs/swagger';

export class CreateBlogDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty({ required: false })
  blogImg?: string;

  @ApiProperty({ required: false })
  sourceRedirect?: string;
}
