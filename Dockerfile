FROM node:18

COPY package.json ./
COPY package-lock.json ./

RUN npm install --only=production
RUN npm install react-scripts@3.4.1 -g 

CMD ["npm", "start"]