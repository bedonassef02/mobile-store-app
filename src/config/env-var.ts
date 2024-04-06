type SequelizeDialect = 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql';

export const DATABASE_NAME: string = process.env.DATABASE_NAME || 'mobile-store';
export const DATABASE_USERNAME:string = process.env.DATABASE_USERNAME || 'root';
export const DATABASE_PASSWORD :string= process.env.DATABASE_PASSWORD || '';
export const DATABASE_HOST :string= process.env.DATABASE_HOST || 'localhost';
export const DATABASE_DIALECT:SequelizeDialect = (process.env.DATABASE_DIALECT || 'mysql') as SequelizeDialect;