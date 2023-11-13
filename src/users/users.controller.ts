import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { Users, UsersDocument } from './schema/users.schema';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(
    @Body()
    userCredentialsDto: Users,
  ): Promise<UsersDocument> {
    const { username, email, password } = userCredentialsDto;
    return this.usersService.create(username, email, password);
  }

  @Get()
  findAll(): Promise<UsersDocument[]> {
    return this.usersService.findAll();
  }

  @Get(':username')
  findOne(@Param('username') username: string) {
    return this.usersService.findOne(username);
  }
}
