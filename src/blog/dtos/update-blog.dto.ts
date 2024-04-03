import { ApiProperty } from '@nestjs/swagger';

export class UpdateBlogDto {
  @ApiProperty()
  title?: string;

  @ApiProperty()
  desc?: string;
}
