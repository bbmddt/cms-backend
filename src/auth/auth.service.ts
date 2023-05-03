import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDTO } from './DTO/auth-credentials.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository,
    private jwtService: JwtService,
  ) {}

  async signUp(authCredentialsDTO: AuthCredentialsDTO): Promise<void> {
    return this.usersRepository.creatUser(authCredentialsDTO);
  }

  async signIn(authCredentialsDTO: AuthCredentialsDTO): Promise<{
    accessToken: string;
    refreshToken: string;
    email: string;
    role: string;
  }> {
    const { email, password } = authCredentialsDTO;
    const user = await this.usersRepository.findOne({ where: { email } });

    if (user && (await bcrypt.compare(password, user.password))) {
      const payload: JwtPayload = { email };
      const accessToken: string = await this.jwtService.sign(payload);

      const refreshToken: string = await this.jwtService.sign(payload, {
        expiresIn: '1d',
      });

      // 將refreshToken存入postgreSQL user欄位
      user.refreshToken = refreshToken;

      try {
        await this.usersRepository.save(user);
      } catch (error) {
        console.log(error);
      }

      return { accessToken, refreshToken, email, role: user.role };
    } else {
      throw new UnauthorizedException('email or password is invalid');
    }
  }

  async refreshToken(
    refreshToken: string,
  ): Promise<{ accessToken: string; refreshToken: string }> {
    const user = await this.usersRepository.findOne({
      where: { refreshToken },
    });
    console.log(user);

    if (!user || user.refreshToken !== refreshToken) {
      throw new Error('Invalid refresh token');
    }

    // const user = await this.usersRepository.findOne({
    //   where: { refreshToken },
    // });
    // console.log(user.email);

    // if (!user) {
    //   throw new Error('Invalid refresh token');
    // }

    // const user = await this.usersRepository.findOne({
    //   where: { email: tokenInDB.email },
    // });

    const payload: JwtPayload = { email: user.email };
    const accessToken = this.jwtService.sign(payload);

    const newRefreshToken = this.jwtService.sign(payload, {
      expiresIn: '1d',
    });

    user.refreshToken = newRefreshToken;
    try {
      await this.usersRepository.save(user);
    } catch (error) {
      console.log(error);
    }
    return { accessToken, refreshToken: newRefreshToken };
  }
}
