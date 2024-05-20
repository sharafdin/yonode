FROM node:21

EXPOSE 8000

WORKDIR /app

COPY . .

RUN npm install -g pnpm

RUN pnpm install

CMD ["pnpm", "run", "dev"]