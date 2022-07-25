import { User } from '../../src/user/entities/user.entity';
import { Todo } from '../../src/todo/entities/todo.entity';
import { ConnectionOptions } from 'typeorm/connection/ConnectionOptions';

const ormConfig: ConnectionOptions = {
  // type: 'mariadb',
  type: 'mysql',
  database: 'nest_todo',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'rooe',
  entities: [User, Todo],
};

export default ormConfig;
