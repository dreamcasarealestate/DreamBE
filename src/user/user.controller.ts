import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './entity/user.entity';

@Controller('users')
@ApiTags('Users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({
    status: 200,
    description: 'List of users.',
    type: CreateUserDto,
    isArray: true,
  })
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }
  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({
    status: 201,
    description: 'User is successfully created',
    type: CreateUserDto,
  })
  async create(@Body() userDto: CreateUserDto) {
    return this.userService.create(userDto);
  }
}
