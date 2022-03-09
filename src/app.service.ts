import {Injectable} from "@nestjs/common";
import { Sequelize } from "sequelize";

@Injectable()
export class AppService {
    constructor() {
    }
    getUsers(){
        return {id: 1, name: "name2"}
    }
}