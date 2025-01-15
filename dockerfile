FROM node:18

WORKDIR /sample-node-project
COPY package.json package-lock.json ./
RUN npm install
COPY . .
EXPOSE 3006
CMD ["node", "app.js"]
