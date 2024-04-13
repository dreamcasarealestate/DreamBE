import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
@Controller()
@ApiTags('Apps')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'This is just basic' })
  @ApiResponse({
    status: 200,
    description: 'List of blogs.',
  })
  getHello(): string {
    return this.appService.getHello();
  }
}
