import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class AuthCredentialsDTO {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password is too weak',
  })
  password: string;

  // @IsString()
  // @MinLength(4)
  // @MaxLength(20)
  // //@Matches email regex
  // @Matches(/\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/, {
  //   message: 'email is invalid',
  // })
  // email: string;
}
