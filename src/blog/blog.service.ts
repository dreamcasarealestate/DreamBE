// // src/blog/blog.controller.ts

// import {
//   Controller,
//   Get,
//   Post,
//   Put,
//   Delete,
//   Param,
//   Body,
// } from '@nestjs/common';
// import { BlogService } from './blog.service';
// import { Blog } from './blog.entity';

// @Controller('blogs')
// export class BlogController {
//   constructor(private readonly blogService: BlogService) {}

//   @Get()
//   async findAll(): Promise<Blog[]> {
//     return this.blogService.findAll();
//   }

//   @Get(':id')
//   async findById(@Param('id') id: number): Promise<Blog> {
//     return this.blogService.findById(id);
//   }

//   @Post()
//   async create(@Body() blogData: Partial<Blog>): Promise<Blog> {
//     return this.blogService.create(blogData);
//   }

//   @Put(':id')
//   async update(
//     @Param('id') id: number,
//     @Body() updatedData: Partial<Blog>,
//   ): Promise<Blog> {
//     return this.blogService.update(id, updatedData);
//   }

//   @Delete(':id')
//   async delete(@Param('id') id: number): Promise<void> {
//     return this.blogService.delete(id);
//   }
// }
