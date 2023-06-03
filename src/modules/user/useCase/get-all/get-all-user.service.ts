import { inject, injectable } from 'tsyringe';
import { UserEntity } from '../../infra/typeorm/entity/user.entity';
import { IGetAllUserService } from '../../interface/user.interface';
import { IUserRepository } from '../../infra/typeorm/repository/user.repository';

@injectable()
export class GetAllUserService implements IGetAllUserService {
  constructor(
    @inject('IUserRepository')
    private readonly userRepository: IUserRepository
  ) {}
  public async getAllUser(params: string): Promise<UserEntity[]> {
    return this.userRepository.getAllUser(params);
  }
}
