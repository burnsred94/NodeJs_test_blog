import {Body, Controller, Get, Param, Post, UseGuards} from '@nestjs/common';
import { creatUserDto } from './dto/creat-user.dto';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './user.model';
import {JwtAuthGuard} from "../auth/jwt-auth.guard";

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @ApiOperation({ summary: 'GetAllUser' })
  @ApiResponse({ status: 200, type: User })
  @UseGuards(JwtAuthGuard)
  @Get()
  getAllUsers() {
    return this.userService.getUsers();
  }

  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({ status: 201, type: User })
  @Post()
  create(@Body() userDto: creatUserDto) {
    return this.userService.createUser(userDto);
  }

  @ApiOperation({ summary: 'GetAllUser' })
  @ApiResponse({ status: 200, type: User })
  @Get('/:userId')
  getUser(@Param('userId') id) {
    return this.userService.getUser(id);
  }
}
