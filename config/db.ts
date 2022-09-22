import mysql from 'serverless-mysql';

const connect = mysql({
  config: {
    host: process.env.NEXT_PUBLIC_DB_HOST,
    user: process.env.NEXT_PUBLIC_DB_USER,
    password: process.env.NEXT_PUBLIC_DB_PASSWORD,
    port: 3306,
    database: process.env.NEXT_PUBLIC_DB_NAME,
  },
});

export { connect };
