import {
  Controller,
  Get,
  Post,
  // Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { BlogService } from './blog.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
// import { UpdateBlogDto } from './dtos/update-blog.dto';
import { CreateBlogDto } from './dtos/create-blog.dto';
import { BlogDto } from './dtos/blog.dto';

@Controller('blogs')
@ApiTags('Blogs')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  @ApiOperation({ summary: 'Get all blogs' })
  @ApiResponse({
    status: 200,
    description: 'List of blogs.',
    type: BlogDto,
    isArray: true,
  })
  async findAll(): Promise<BlogDto[]> {
    return this.blogService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Create a new blog' })
  @ApiResponse({ status: 201, description: 'Blog created.', type: BlogDto })
  async create(@Body() createBlogDto: CreateBlogDto): Promise<BlogDto> {
    return this.blogService.create(createBlogDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a blog' })
  // @ApiParam({ name: 'id', description: 'ID of the blog to delete' })
  @ApiResponse({ status: 200, description: 'Blog deleted.' })
  async delete(@Param('id') id: number): Promise<void> {
    return this.blogService.delete(id);
  }
}
