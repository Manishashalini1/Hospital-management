FROM node:14
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN chown -R node:node .
EXPOSE 3000
CMD [ "node", "app.js" ]


