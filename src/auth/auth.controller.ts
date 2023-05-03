import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { AuthCredentialsDTO } from './DTO/auth-credentials.dto';
import { AuthService } from './auth.service';
import { Response, Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() authCredentialsDTO: AuthCredentialsDTO): Promise<void> {
    return this.authService.signUp(authCredentialsDTO);
  }

  @Post('/signin')
  async signIn(
    @Body() authCredentialsDTO: AuthCredentialsDTO,
    @Res({ passthrough: true }) res: Response,
  ): Promise<void> {
    //將accessToken , refreshToken 存到cookies 中
    const accessToken = (await this.authService.signIn(authCredentialsDTO))
      .accessToken;
    const refreshToken = (await this.authService.signIn(authCredentialsDTO))
      .refreshToken;
    res.cookie('accessToken', accessToken, { httpOnly: true });
    res.cookie('refreshToken', refreshToken, { httpOnly: true });

    // return this.authService.signIn(authCredentialsDTO);
  }

  @Post('/refresh')
  async refreshToken(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ): Promise<void> {
    const refreshToken: string = await req.cookies['refreshToken'];
    const { accessToken: new_accessToken, refreshToken: new_refreshToken } =
      await this.authService.refreshToken(refreshToken);

    res.cookie('accessToken', new_accessToken, { httpOnly: true });
    res.cookie('refreshToken', new_refreshToken, { httpOnly: true });
  }
}
