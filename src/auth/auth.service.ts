import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/signUp.dto';
import { LogInDto } from './dto/logIn.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}
  async signUp(signUpDto: SignUpDto): Promise<{ token: string }> {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegExp = /^(.{6,})$/;
    const { name, email, password } = signUpDto;
    if (!emailRegex.test(email)) {
      throw new BadRequestException('Invalid email format');
    }
    if (!passwordRegExp.test(password)) {
      throw new BadRequestException(
        'Password must have more that six characters',
      );
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.userModel.create({
      name,
      email,
      password: hashedPassword,
    });
    const token = this.jwtService.sign({ id: user._id });
    return { token };
  }

  async logIn(logInDto: LogInDto): Promise<{ token: string }> {
    const { email, password } = logInDto;
    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new UnauthorizedException('Invalid email and password');
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      throw new UnauthorizedException('Invalid email and password');
    }
  }
}
