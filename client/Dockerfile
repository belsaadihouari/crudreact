FROM node:20.12
WORKDIR /app
COPY package.json .
RUN npm i 
COPY . .
EXPOSE 8000
CMD [ "npm","run","dev" ]