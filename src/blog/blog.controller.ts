// // src/blog/blog.service.ts

// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// // import { Blog } from '../..src/entity/blog';

// @Injectable()
// export class BlogService {
//   constructor(
//     @InjectRepository(Blog)
//     private readonly blogRepository: Repository<Blog>,
//   ) {}

//   async findAll(): Promise<Blog[]> {
//     return this.blogRepository.find();
//   }

//   async findById(id: number): Promise<Blog> {
//     return this.blogRepository.findOne(id);
//   }

//   async create(blogData: Partial<Blog>): Promise<Blog> {
//     const newBlog = this.blogRepository.create(blogData);
//     return this.blogRepository.save(newBlog);
//   }

//   async update(id: number, updatedData: Partial<Blog>): Promise<Blog> {
//     await this.blogRepository.update(id, updatedData);
//     return this.blogRepository.findOne(id);
//   }

//   async delete(id: number): Promise<void> {
//     await this.blogRepository.delete(id);
//   }
// }
