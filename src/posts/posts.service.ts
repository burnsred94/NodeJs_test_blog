import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Posts } from './posts.model';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Posts) private readonly postRepository: typeof Posts,
  ) {}

  async createPost(dto: CreatePostDto): Promise<Posts> {
    const post = await this.postRepository.create(dto);
    return post;
  }

  async getPost(id: number): Promise<Posts> {
    return await this.postRepository.findOne({
      where: { id },
      include: { all: true },
    });
  }

  async getAllPost(): Promise<Posts[]> {
    return await this.postRepository.findAll();
  }

  async editPost(id: number, dto: CreatePostDto): Promise<Posts> {
    const post = await this.getPost(id);
    return post.update(dto);
  }

  async deletePost(id: number): Promise<void> {
    const post = await this.getPost(id);
    return post.destroy();
  }
}
