FROM node:18-alpine

# Create app directory
WORKDIR /app

# Install app dependencies

COPY package*.json ./

COPY ./src ./src

COPY ./public ./public

RUN npm install \ 
    && npm install -g serve\
    && npm run build\
    && rm -rf node_modules

EXPOSE 3000
    
CMD [ "serve", "-s", "build" ]

