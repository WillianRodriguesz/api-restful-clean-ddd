import { Module } from '@nestjs/common';
import { UsersService } from './infrastructure/users.service';
import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
