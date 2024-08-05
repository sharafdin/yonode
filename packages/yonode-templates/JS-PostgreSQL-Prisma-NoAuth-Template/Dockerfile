FROM node:21

EXPOSE 8000

WORKDIR /app

COPY . .

RUN npm install -g pnpm

RUN pnpm install

RUN npm install -g nodemon

RUN npx prisma generate

CMD ["nodemon", "-L", "./src/app.js"]