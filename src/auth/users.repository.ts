import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { User } from './user.entity';
import { DataSource, Repository } from 'typeorm';
import { AuthCredentialsDTO } from './DTO/auth-credentials.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  async creatUser(authCredentialsDTO: AuthCredentialsDTO): Promise<void> {
    const { email, password } = authCredentialsDTO;

    // hash
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    // console.log('salt', salt);
    // console.log('hashedPassword', hashedPassword);

    const user = this.create({
      email,
      password: hashedPassword,
    });

    try {
      await this.save(user);
    } catch (error) {
      console.log(error);
      if (error.code === '23505') {
        //Dupliate email
        throw new ConflictException('Email already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
