import { DataSource, DataSourceOptions } from 'typeorm';
export const dbdatasource: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass',
  database: 'dreamcasa',
  synchronize: false,
  entities: ['src/blog/entity/*.ts'],
  migrations: ['src/migrations/*.ts'],
  migrationsTableName: 'task_migrations',
};

const dataSource = new DataSource(dbdatasource);
export default dataSource;
