import {Inject, Injectable} from '@nestjs/common';
import { User } from "./user.model";
import { InjectModel } from "@nestjs/sequelize";
import {creatUserDto} from "./dto/creat-user.dto";

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository: typeof User) {
    }

    async createUser(dto: creatUserDto){
        const user = await this.userRepository.create(dto);
        return user
    }

    async getUserByEmail(email: string){
        const user = await this.userRepository.findOne({ where: {email}, include : {all: true}})
        return user
    }

}
