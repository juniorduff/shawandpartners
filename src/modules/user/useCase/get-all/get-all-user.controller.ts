import { Controller, Get, QueryParam } from 'routing-controllers';
import { inject, injectable } from 'tsyringe';
import { IGetAllUserService } from '../../interface/user.interface';

@Controller('/api')
@injectable()
export class GetAllUserController {
  constructor(
    @inject('IGetAllUserService') private userService: IGetAllUserService
  ) {}
  @Get('/users')
  public async getAllUser(@QueryParam('q') params: string) {
    console.log(params);
    return this.userService.getAllUser(params);
  }
}
