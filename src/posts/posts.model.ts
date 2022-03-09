import { Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty}  from "@nestjs/swagger";



// @Table({
//     tableName: 'posts'
// })
// export class Posts extends Model<Posts, PostsCreationAttrs>{
//     @ApiProperty({example: 1, description : 'Unique ID'})
//     @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
//     resource : string |
//     @ApiProperty({example: "Sergey", description : 'Name User'})
//     @Column({type: DataType.STRING,  allowNull: false})
//     name: string
//     @ApiProperty({example: 'P@SVV0rD', description : 'User password'})
//     @Column({type: DataType.STRING, allowNull: false})
//     password: string
//     @ApiProperty({example: 'email@gmail.com', description : 'User email'})
//     @Column({type: DataType.STRING, unique: true, allowNull: false})
//     email: string
// }