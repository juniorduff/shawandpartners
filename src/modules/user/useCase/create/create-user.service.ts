import { inject, injectable } from 'tsyringe';
import { UserEntity } from '../../infra/typeorm/entity/user.entity';
import { IUserRepository } from '../../infra/typeorm/repository/user.repository';
import { IUserCsvDTO } from '../../../files/dto/file.dto';
import { ICreateUserService } from '../../interface/user.interface';

@injectable()
export class CreateUserService implements ICreateUserService {
  constructor(
    @inject('IUserRepository') private userRepository: IUserRepository
  ) {}

  create(data: IUserCsvDTO[]): Promise<UserEntity[]> {
    return this.userRepository.createMany(data);
  }
}
