import { createPool } from 'mysql2/promise';

export async function connect() {

    const connection = await createPool({
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'babbel',
        connectionLimit: 10,
    });

    return connection;

}