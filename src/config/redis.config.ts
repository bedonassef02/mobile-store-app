import { Redis } from 'ioredis';

const REDIS_HOST: string = process.env.REDIS_HOST || 'redis';
const REDIS_PORT: number = parseInt(process.env.REDIS_PORT || '6379');

export const redis: Redis = new Redis({ host: REDIS_HOST, port: REDIS_PORT });
