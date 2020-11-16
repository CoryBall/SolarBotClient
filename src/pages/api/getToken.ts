import jwt from 'next-auth/jwt';

const secret = process.env.DISCORD_CLIENT_SECRET;

export default async (req, res) => {
    const token = await jwt.getToken({ req, secret });
    if (token) {
        // Signed in
        console.log('JSON Web Token', JSON.stringify(token, null, 2));
    } else {
        // Not Signed in
        res.status(401)
    }
    res.end();
}