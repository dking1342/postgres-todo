import Pool from 'pg-pool';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
    user:process.env.PG_USERNAME,
    password:process.env.PG_PASSWORD,
    host:process.env.PG_HOST,
    port:process.env.PG_PORT,
    database:process.env.PG_DATABASE_NAME
});

export default pool;