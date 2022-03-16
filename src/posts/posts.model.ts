import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../users/user.model';

export interface PostCreationAttrs {
  readonly title: string;
  readonly body: string;
  readonly description: string;
  readonly author: string;
  readonly date: string;
}

@Table({
  tableName: 'posts',
})
export class Posts extends Model<Posts, PostCreationAttrs> {
  @ApiProperty({ example: 1, description: 'ID posts' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Title blog', description: 'Title blog' })
  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @ApiProperty({ example: '/res/video.web4', description: 'Body post src' })
  @Column({ type: DataType.STRING, allowNull: true })
  body: string;

  @ApiProperty({ example: 'Description', description: 'Description text' })
  @Column({ type: DataType.STRING })
  description: string;

  @ApiProperty({ example: 'Sergey', description: 'User email' })
  @Column({ type: DataType.STRING, allowNull: true })
  author: string;

  @ApiProperty({ example: 'Date', description: 'Date' })
  @Column({ type: DataType.STRING })
  date: string;

  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  userId: number;
}
