FROM node:21

EXPOSE 8000

WORKDIR /app

COPY . .

RUN npm install -g pnpm

RUN npm install -g nodemon

RUN pnpm install

CMD ["pnpm", "run", "dev"]