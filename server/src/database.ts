import { Pool } from 'pg';

export const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'password',
    database: 'clearmove_blog',
    port: 5432
});

