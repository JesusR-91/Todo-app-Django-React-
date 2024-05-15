# Frontend React with Vite
FROM node

WORKDIR /frontend
COPY ./package.json .

RUN npm install
COPY . .

RUN npm run build
EXPOSE 8080
CMD ["npm", "run", "dev"]