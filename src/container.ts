// Registra a implementação do Logger
import { container } from 'tsyringe';
import { CreateUserService } from './modules/user/useCase/create/create-user.service';
import { useContainer } from 'routing-controllers';
import TsyringeAdapter from './tsyringe.adapter';
import {
  ICreateUserService,
  IGetAllUserService,
  IUserRepository,
} from './modules/user/interface/user.interface';
import { GetAllUserService } from './modules/user/useCase/get-all/get-all-user.service';
import { UserRepository } from './modules/user/infra/typeorm/repository/user.repository';

container.register<IUserRepository>('IUserRepository', {
  useClass: UserRepository,
});
container.register<ICreateUserService>('ICreateUserService', {
  useClass: CreateUserService,
});
container.register<IGetAllUserService>('IGetAllUserService', {
  useClass: GetAllUserService,
});
useContainer(new TsyringeAdapter(container));
