import {Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";

interface UserCreationAttrs {
    email : string
    password : string
}

@Table({
    tableName: 'users'
})
export class User extends Model<User, UserCreationAttrs>{
    @ApiProperty({example: 1, description : 'Unique ID'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number
    @ApiProperty({example: "Sergey", description : 'Name User'})
    @Column({type: DataType.STRING,  allowNull: true})
    name: string
    @ApiProperty({example: 'P@SVV0rD', description : 'User password'})
    @Column({type: DataType.STRING, allowNull: false})
    password: string
    @ApiProperty({example: 'email@gmail.com', description : 'User email'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string
}
