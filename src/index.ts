import 'reflect-metadata';
import { createExpressServer } from "routing-controllers";
import { FilesController } from "./modules/files/useCase/create/files.controller";
 import './container';
import { ErrorMiddleware } from "./shared/Middleware/error-handle";
import { GetAllUserController } from "./modules/user/useCase/get-all/get-all-user.controller";
const app = createExpressServer({
  controllers: [FilesController,GetAllUserController],
  middlewares: [ErrorMiddleware,],
});




app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
