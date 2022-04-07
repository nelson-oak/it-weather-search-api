import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('hello')
export class HelloController {
  @Get('/')
  @ApiTags('Hello')
  @ApiOperation({
    summary: 'Hello',
    description: 'Hello',
  })
  @ApiResponse({
    status: 200,
    description: 'Success',
    schema: {
      type: 'Object',
      example: {
        statusCode: 200,
        message: 'Hello',
      },
    },
  })
  @ApiResponse({
    status: 500,
    description: 'Server Error',
    schema: {
      type: 'Object',
      example: {
        statusCode: 500,
        message: 'Internal server error',
      },
    },
  })
  async hello() {
    return {
      statusCode: 200,
      message: 'Hello',
    };
  }
}
