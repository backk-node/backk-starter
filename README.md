# backk-starter

1. Clone [Backk starter project](https://github.com/backk-node/backk-starter)
   ```
   git clone git@github.com:backk-node/backk-starter.git <your-microservice-name>
   ```
2. Complete all 4 TODOs in *src/main.ts* and *src/MyMicroservice.ts* files
3. Update your microservice name to *package.json* and change the name *src/MyMicroservice.ts* to reflect your microservice name
4. Remove unused data stores:
    * If you are using MongoDB, remove
        * *src/datastores/mySqlDataStore.ts*
        * *src/datastores/postgreSqlDataStore.ts*
    * If you are using MySQL/MariaDB or MySQL compatible database, remove
        * *src/datastores/mongoDbDataStore.ts*
        * *src/datastores/postgreSqlDataStore.ts*
    * If you are using PostgreSQL or PostgreSQL compatible database, remove
        * *src/datastores/mySqlDataStore.ts*
        *  *src/datastores/mongoDbDataStore.ts*
5. Check that the environment variable values in the *.env* file are correct for your development environment
    * If you are using MongoDB, check
        * MONGO_DB_URI
    * If you are using MySQL/MariaDB or MySQL compatible database, check
        * MYSQL_HOST
        * MYSQL_USER
        * MYSQL_PASSWORD
    * If you are using PostgreSQL or PostgreSQL compatible database, check
        * POSTGRESQL_HOST
        * POSTGRESQL_USER
        * POSTGRESQL_PASSWORD
    * If you are using Kafka, check
        * KAFKA_SERVER
    * if you are using Redis, check
        * REDIS_SERVER
6. OPTIONAL STEP: Remove unnecessary dependencies from *package.json* file
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
    * If you are using PostgreSQL or PostgreSQL compatible database, remove following
      ```
      "@opentelemetry/plugin-mongodb": "0.11.0",
      "@opentelemetry/plugin-mysql": "0.11.0",
      "mongodb": "^3.6.6",
      "mysql2": "2.2.5",
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
7. Run
    ```
    npm install
    ```
