// src/blog/blog.controller.ts

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
import { Blog } from '../blog/entity/blog.entity';
import { ApiTags } from '@nestjs/swagger';
// import { UpdateBlogDto } from './dtos/update-blog.dto';
import { CreateBlogDto } from './dtos/create-blog.dto';

@Controller('blogs')
@ApiTags('Blogs')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  async findAll(): Promise<Blog[]> {
    return this.blogService.findAll();
  }

  // @Get(':id')
  // async findById(@Param('id') id: number): Promise<Blog> {
  //   return this.blogService.findById(id);
  // }

  @Post()
  async create(@Body() createBlogDto: CreateBlogDto): Promise<Blog> {
    return this.blogService.create(createBlogDto);
  }

  // @Put(':id')
  // async update(
  //   @Param('id') id: number,
  //   @Body() updateBlogDto: UpdateBlogDto,
  // ): Promise<Blog> {
  //   return this.blogService.update(id, updateBlogDto);
  // }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.blogService.delete(id);
  }
}
