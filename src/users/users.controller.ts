import { Body, Controller, Get, Post } from '@nestjs/common';
import { creatUserDto } from "./dto/creat-user.dto";
import { UsersService } from "./users.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import { User } from "./user.model";

@ApiTags('Users')
@Controller('users')
export class UsersController {

    constructor(private userService : UsersService) {

    }
    @ApiOperation({summary: 'Create user'})
    @ApiResponse({status: 200, type: User})
    @Post()
    create(@Body() userDto : creatUserDto){
        return this.userService.createUser(userDto)
    }

}
