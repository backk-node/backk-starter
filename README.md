 # backk-starter

## Prerequisites
1. [Node.js](https://nodejs.org/en/download/) >= 12.19
2. If you are using a database, you need to install a local instance of the database or have a remote instance available, for example a cloud database. For local installations:
   * [Download PostgreSQL](https://www.postgresql.org/download/)
   * [Download MySQL](https://www.mysql.com/downloads/)
   * [Download MariaDB](https://mariadb.org/download/)
   * [Download MongoDB](https://www.mongodb.com/try/download/community)
   * [Download CockroachDB](https://www.cockroachlabs.com/docs/stable/install-cockroachdb.html)
   * [Download YugabyteDB](https://download.yugabyte.com/)

## Get Started
Follow the below steps: (In the future, there will be [backk-cli](https://github.com/backk-node/backk-cli) available, which can be used to generate a Backk project based on a set of questions)

1. Clone [Backk starter project](https://github.com/backk-node/backk-starter) to a directory named after you microservice
   ```
   git clone git@github.com:backk-node/backk-starter.git <your-microservice-name>
   cd <your-microservice-name>
   ```
2. Complete all 3 TODOs in `src/main.ts` and `src/MyMicroservice.ts` files
3. Check that the environment variable values in the `.env` file are correct for your development environment
   * If you are using MongoDB, check
      * `MONGO_DB_URI`
   * If you are using MySQL/MariaDB or MySQL compatible database, check
      * `MYSQL_HOST`
      * `MYSQL_PORT` 
      * `MYSQL_USER`
      * `MYSQL_PASSWORD`
   * If you are using PostgreSQL or PostgreSQL compatible database, check
      * `POSTGRESQL_HOST`
      * `POSTGRESQL_PORT`
      * `POSTGRESQL_USER`
      * `POSTGRESQL_PASSWORD`
   * If you are using Kafka, check
      * `KAFKA_SERVER`
   * if you are using Redis, check
      * `REDIS_SERVER`
4. OPTIONAL STEP: Remove unnecessary dependencies from `package.json` file
   * If you are using MongoDB, remove following lines:
     ```
     "@opentelemetry/plugin-mysql": "0.11.0",
     "@opentelemetry/plugin-pg": "0.11.0",
     "mysql2": "2.2.5",
     "pg": "^8.0.2",
     ```
   * If you are using MySQL/MariaDB or MySQL compatible database, remove following lines:
     ```
     "@opentelemetry/plugin-mongodb": "0.11.0",
     "@opentelemetry/plugin-pg": "0.11.0",
     "mongodb": "^3.6.6",
     "pg": "^8.0.2",
     ```
   * If you are using PostgreSQL or PostgreSQL compatible database, remove following lines:
     ```
     "@opentelemetry/plugin-mongodb": "0.11.0",
     "@opentelemetry/plugin-mysql": "0.11.0",
     "mongodb": "^3.6.6",
     "mysql2": "2.2.5",
     ```
   * If you are **NOT** using any database, remove following lines:
      ```
     "@opentelemetry/plugin-mongodb": "0.11.0",
     "@opentelemetry/plugin-mysql": "0.11.0",
     "@opentelemetry/plugin-pg": "0.11.0",
     "mongodb": "^3.6.6",
     "mysql2": "2.2.5",
     "pg": "^8.0.2",
     ```
   * If you are **NOT** using Kafka, remove following line:
     ```
     "kafkajs": "^1.15.0",
     ```
   * If you are **NOT** using Redis, remove following lines:
     ```
     "@opentelemetry/plugin-ioredis": "0.11.0",
     "ioredis": "^4.19.2",
     ```
5. Run
    ```
    npm install
    npm run start:dev
    ```
6. You can test your microservice API using [Postman](https://www.postman.com/downloads/)
   1. Launch Postman
   2. Choose Import and then choose file `postman/<your-microservice-name>_api_postman_collection.json`
