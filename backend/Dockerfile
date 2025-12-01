FROM node

ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PWD=adminpassword 
RUN mkdir -p backend
COPY . /backend

CMD ["node", "/backend/server.js"]