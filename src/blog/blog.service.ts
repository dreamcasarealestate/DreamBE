// src/blog/blog.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Blog } from '../blog/entity/blog.entity';
import { CreateBlogDto } from './dtos/create-blog.dto';
import { BlogDto } from './dtos/blog.dto';
// import { UpdateBlogDto } from './dtos/update-blog.dto';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(Blog)
    private readonly blogRepository: Repository<Blog>,
  ) {}

  async findAll(): Promise<BlogDto[]> {
    return this.blogRepository.find();
  }

  //   async findById(id: number): Promise<Blog> {
  //     const blog = await this.blogRepository.findOne(id);
  //     if (!blog) {
  //       throw new NotFoundException(`Blog with ID ${id} not found`);
  //     }
  //     return blog;
  //   }

  async create(createBlogDto: CreateBlogDto): Promise<BlogDto> {
    const newBlog = this.blogRepository.create(createBlogDto);
    return this.blogRepository.save(newBlog);
  }

  //   async update(id: number, updateBlogDto: UpdateBlogDto): Promise<Blog> {
  //     await this.blogRepository.update(id, updateBlogDto);
  //     return this.findById(id);
  //   }

  async delete(id: number): Promise<void> {
    const result = await this.blogRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Blog with ID ${id} not found`);
    }
  }
}
