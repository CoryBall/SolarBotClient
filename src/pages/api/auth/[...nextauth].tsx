import NextAuth, {InitOptions} from 'next-auth';
import Providers from 'next-auth/providers';

const options: InitOptions = {
    providers: [
        Providers.Discord({
            clientId: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_SECRET,
            scope: 'guilds identify email',
            }),
    ],

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