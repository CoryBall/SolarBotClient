import NextAuth, {InitOptions} from 'next-auth';
import Providers from 'next-auth/providers';
import {PostgresConnectionOptions} from "typeorm/driver/postgres/PostgresConnectionOptions";

const options: InitOptions = {
    providers: [
        Providers.Discord({
            clientId: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_SECRET,
            scope: 'guilds identify email',
            }),
    ],

    // A database is optional, but required to persist accounts in a database
    // database: `postgres://${process.env.TYPEORM_USERNAME}:${process.env.TYPEORM_PASSWORD}@${process.env.TYPEORM_HOST}:${process.env.TYPEORM_PORT}/${process.env.TYPEORM_DB}?entityPrefix=nextauth_?synchronize=true`
    database: {
        type: 'postgres',
        host: process.env.TYPEORM_HOST,
        port: +process.env.TYPEORM_PORT,
        username: process.env.TYPEORM_USERNAME,
        password: process.env.TYPEORM_PASSWORD,
        database: process.env.TYPEORM_DATABASE,
        entityPrefix: 'nextauth_',
        synchronize: true
    },
}

export default (req, res) => NextAuth(req, res, options)