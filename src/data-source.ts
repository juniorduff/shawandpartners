import { DataSource } from "typeorm";
import { UserEntity } from "./modules/user/infra/typeorm/entity/user.entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "challenge",
  synchronize: true,
  logging: true,
  entities: [UserEntity],
  subscribers: [],
  migrations: [],
})

AppDataSource.initialize()
  .then(() => {
  console.log('Database connected');
  })
  .catch((error) => console.log(error))
