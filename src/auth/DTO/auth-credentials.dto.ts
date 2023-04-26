import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class AuthCredentialsDTO {
  // @IsString()
  // @MinLength(4)
  // @MaxLength(20)
  // username: string;
  @IsString()
  // email regex
  @Matches(/\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/, {
    message: 'email or password is invalid',
  })
  email: string;

  @IsString()
  // @MinLength(8)
  // @MaxLength(20)
  // password regex
  // Password must be at least 8 characters long and include at least one uppercase letter,
  // one lowercase letter, and one number or special character.
  // Special characters "\n" and "." are not allowed.
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'email or password is invalid',
  })
  password: string;
}
