import mysql from 'promise-mysql';

import keys from './keys';

const pool = mysql.createPool(keys.database);

// pool.getConnection()
//     .then(connection => {
//         pool.releaseConnection(connection);
//         console.log('DB is Connected');
//     });

pool.then(promise => {
    return promise.getConnection();
}).then(connection => {
    connection.release();
    console.log('DB is Connected');
})

export default pool;