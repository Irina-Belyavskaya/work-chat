import { DataSource, DataSourceOptions } from "typeorm";
import { config } from "dotenv";
import { UserEntity } from "src/app/users/entities/user.entity";
import { ChatEntity } from "src/chat/entities/chat.entity";
import { MessageEntity } from "src/messages/entities/message.entity";

// ============ Entities ================


// ============ Views ================


// ============ Migrations ================
// import { createTables1683286134248 } from "src/migrations/1683286134248-create-tables";
// import { DmlMigration1683286171399 } from "src/migrations/1683286171399-DmlMigration";

config();

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: `${process.env.POSTGRES_HOST}`,
  port: Number(process.env.POSTGRES_PORT),
  username: `${process.env.POSTGRES_USER}`,
  password: `${process.env.POSTGRES_PASSWORD}`,
  database: `${process.env.POSTGRES_DB}`,
  installExtensions: true,
  // migrations: [],
  // migrationsRun: true,
  synchronize: true,
  entities: [UserEntity, ChatEntity, MessageEntity],
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;