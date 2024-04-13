FROM node 
WORKDIR /
COPY . .

RUN npm install
EXPOSE 5173
CMD ["npm", "run", "start"]