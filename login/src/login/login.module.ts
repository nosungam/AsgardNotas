import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entities';


@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [LoginController],
  providers: [LoginService]
})
export class LoginModule {}
