# Yonode + PostgreSQL with Prisma

This template simplifies setting up a server in [Yonode](https://yonode.org) with Node.js and Express, offering a quick start for server-side development.

## Getting Started

Initially, navigate to the .env file to set up the required environment variables.

Next, launch the development server:

```bash
npm start
# or
yarn start
# or
pnpm start
# or
bun start
```

The server is running and ready to serve requests.

Now, Go to the Src directory and start building the server.

Happy coding!


## NOTES

### Using Docker

To use Docker, you do not need to install `node_modules` locally. Simply run the following command:

```bash
docker-compose up
```