import { Body, Controller, Post, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signUp.dto';
import { LogInDto } from './dto/logIn.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('signup')
  signUp(
    @Body()
    signUpDto: SignUpDto,
  ): Promise<{ token: string }> {
    return this.authService.signUp(signUpDto);
  }

  @Get('login')
  logIn(
    @Body()
    logInDto: LogInDto,
  ): Promise<{ token: string }> {
    return this.authService.logIn(logInDto);
  }
}
