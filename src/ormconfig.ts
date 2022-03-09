import { config } from './config/env/connection';

module.exports = {
  ...config,
  entities: ['src/shared/database/entities/*.entity.ts'],
  migrations: ['src/shared/database/migrations/*.ts'],
  cli: {
    migrationsDir: 'src/shared/database/migrations',
  },
};
