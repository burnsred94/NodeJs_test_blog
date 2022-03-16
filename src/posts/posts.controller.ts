import {
  Body,
  Controller,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Posts } from './posts.model';

@Controller('posts')
export class PostsController {
  constructor(private postService: PostsService) {}

  @ApiOperation({ summary: 'Create post' })
  @ApiResponse({ status: 200, type: Posts })
  @Post('/')
  async addPost(@Res() res, @Body() dto: CreatePostDto) {
    const newPost = await this.postService.createPost(dto);

    return res.status(HttpStatus.OK).json({
      message: 'Post has been submitted successfully!',
      post: newPost,
    });
  }

  @ApiOperation({ summary: 'Get post' })
  @ApiResponse({ status: 200, type: Posts })
  @Get('/:postID')
  async getPost(@Res() res, @Param('postID') postID) {
    const post = await this.postService.getPost(postID);
    if (!post) {
      throw new NotFoundException('Post does not exist');
    }
    return res.status(HttpStatus.OK).json(post);
  }

  @ApiOperation({ summary: 'Get all posts' })
  @ApiResponse({ status: 200, type: [Posts] })
  @Get('/')
  async getAllPost(@Res() res) {
    const posts = await this.postService.getAllPost();
    return res.status(HttpStatus.OK).json(posts);
  }

  @ApiOperation({ summary: 'Update post' })
  @ApiResponse({ status: 200, type: Posts })
  @Put('/edit/')
  async updatePost(
    @Res() res,
    @Query('postID') postID,
    @Body() dto: CreatePostDto,
  ) {
    const editedPost = await this.postService.editPost(Number(postID), dto);
    return res.status(HttpStatus.OK).json({
      message: 'Post has been successfully updated',
      post: editedPost,
    });
  }
}
