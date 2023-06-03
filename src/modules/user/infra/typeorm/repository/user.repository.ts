import { UserEntity } from '../entity/user.entity';
import { injectable } from 'tsyringe';
import { Repository } from 'typeorm';
import { AppDataSource } from '../../../../../data-source';
import {
  ICreateUserDTO,
  IUserRepository,
} from '../../../interface/user.interface';

@injectable()
export class UserRepository implements IUserRepository {
  private userRepository: Repository<UserEntity>;
  constructor() {
    this.userRepository = AppDataSource.getRepository(UserEntity);
  }
  public async createMany(data: ICreateUserDTO[]): Promise<UserEntity[]> {
    const user = this.userRepository.create(data);
    return this.userRepository.save(user);
  }
  public async getAllUser(params: string): Promise<UserEntity[]> {
    const query = this.userRepository.createQueryBuilder('table');
    if (params) {
      query
        .where('table.name ILIKE :searchQuery', {
          searchQuery: `%${params}%`,
        })
        .orWhere('table.city ILIKE :searchQuery', {
          searchQuery: `%${params}%`,
        })
        .orWhere('table.country ILIKE :searchQuery', {
          searchQuery: `%${params}%`,
        })
        .orWhere('table.favorite_sport ILIKE :searchQuery', {
          searchQuery: `%${params}%`,
        });
    }
    return query.getMany();
  }
}
