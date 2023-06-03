import { UserEntity } from '../infra/typeorm/entity/user.entity';
import { IUserCsvDTO } from '../../files/dto/file.dto';

export interface ICreateUserService {
  create(data: IUserCsvDTO[]): Promise<UserEntity[]>;
}
export interface IGetAllUserService {
  getAllUser(params: string): Promise<UserEntity[]>;
}
export interface ICreateUserDTO {
  name: string;
  city: string;
  country: string;
  favorite_sport: string;
}

export interface IUserRepository {
  createMany(data: ICreateUserDTO[]): Promise<UserEntity[]>;

  getAllUser(params: string): Promise<UserEntity[]>;
}
