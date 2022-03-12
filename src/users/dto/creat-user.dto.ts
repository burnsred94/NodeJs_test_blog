import { ApiProperty } from '@nestjs/swagger';

export class creatUserDto {
  @ApiProperty({ example: 'email@gmail.com', description: 'Email' })
  readonly email: string;
  @ApiProperty({ example: 'P@SVV0rD', description: 'User password' })
  readonly password: string;
}
