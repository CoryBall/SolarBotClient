# SolarBot Client

## Purpose of this project

The purpose of SolarBot is to provide a connection between Discord and Final Fantasy 14's data. <br/>
This allows discord users to connect with FFXIV's API and allow managing FC members in the discord server.

### Features

### In Progress:
+ !dateJoined "discord name" (In Progress)
    + returns the date that user joined the FC, and how many days it has been since then
+ !fights
    + returns a list of fights registered in the server
+ !cleared "fight name"
    + returns a list of discord users in the server that have completed this fight
+ !needsClear "fight name"
    + returns a list of discord users that have requested help for the specified fight

### Steps to run this project:

+ Create a .env file with the following variables:
  + NEXTAUTH_URL = http://localhost:3000
  + SERVER_URL = http://localhost:4000
  + TYPEORM_CONNECTION = postgres
  + TYPEORM_HOST = localhost
  + TYPEORM_USERNAME
  + TYPEORM_PASSWORD
  + TYPEORM_DATABASE
  + TYPEORM_PORT
  + DISCORD_CLIENT_ID
  + DISCORD_SECRET
  + DISCORD_AUTH_URL = https://discord.com/api/oauth2/authorize
  + DISCORD_TOKEN_URL = https://discord.com/api/oauth2/token
  + DISCORD_REVOKE_URL = https://discord.com/api/oauth2/token/revoke
  + DISCORD_REDIRECT_URI = http://localhost:3000/api/auth/callback/discord
+ ``yarn`` to install all dependencies
+ ``yarn dev`` That's it!

### Tech Stack

+ React.js
+ Typescript
+ eslint using AirBnb config
+ Next.js
+ Next Auth
+ GraphQL CodeGen
+ Apollo Client
