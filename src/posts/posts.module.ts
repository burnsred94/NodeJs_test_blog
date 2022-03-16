import {forwardRef, Module} from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Posts } from './posts.model';
import { User } from '../users/user.model';
import { AuthModule } from "../auth/auth.module";

@Module({
  controllers: [PostsController],
  providers: [PostsService],
  imports: [
      SequelizeModule.forFeature([Posts, User]),
      forwardRef(() => AuthModule)
  ],
})
export class PostsModule {}
