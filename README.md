 # backk-starter

## Prerequisites
1. [Node.js](https://nodejs.org/en/download/) >= 12.19
2. If your microservice is using a database, you need to install a local instance of the database or have a remote instance available, for example a cloud database.
   You can also run database in a container. For running a container in Mac or Windows, you need to install [Docker Desktop](https://www.docker.com/products/docker-desktop). You can use same database installation for developing multiple Backk microservices. For local database installations:
   - [Download and install PostgreSQL](https://www.postgresql.org/download/) or [run PostgreSQL in a container](https://hub.docker.com/_/postgres)
   - [Download and install MySQL](https://www.mysql.com/downloads/) or [run MySQL in a container](https://hub.docker.com/_/mysql)
   - [Download and install MariaDB](https://mariadb.org/download/) or [run MariaDB in a container](https://hub.docker.com/_/mariadb)
   - [Download and install MongoDB](https://www.mongodb.com/try/download/community) or [run MongoDB in a container](https://hub.docker.com/_/mongo)
   - [Download and install Vitess](https://vitess.io/docs/get-started/local/) or [run Vitess in a container](https://vitess.io/docs/get-started/local-docker)
   - [Download and install CockroachDB](https://www.cockroachlabs.com/docs/stable/install-cockroachdb.html) or [run CockroachDB in a container](https://hub.docker.com/r/cockroachdb/cockroach)
   - [Download and install YugabyteDB](https://download.yugabyte.com/) or [run YugabyteDB in a container](https://hub.docker.com/r/yugabytedb/yugabyte)
3. If your microservice uses Kafka, you need to install a local instance of Kafka or have a remote instance available, for example in cloud.
    - [Download and install Kafka](https://kafka.apache.org/downloads) or [run Kafka in a container](https://hub.docker.com/r/wurstmeister/kafka)
4. If your microservice uses Redis (as message queue and/or response cache), you need to install a local instance of Redis or have a remote instance available, for example in cloud.
    - [Download and install Redis](https://redis.io/download) or [run Redis in a container](https://hub.docker.com/_/redis)


## Get Started
- [Development environment](#development-environment)
- [Integration testing in development environment](#integration-testing-in-development-environment)
- [CI/CD](#cicd)

### <a name="development-environment"></a> Development environment

Follow the below steps: (In the future, there will be [backk-cli](https://github.com/backk-node/backk-cli) available, which can be used to generate a Backk project based on a set of questions)

1. Clone [Backk starter project](https://github.com/backk-node/backk-starter) to a directory named after you microservice
   ```bash
   # Using SSH
   git clone git@github.com:backk-node/backk-starter.git <your-microservice-name>
   # Or using HTTPS
   git clone https://github.com/backk-node/backk-starter.git <your-microservice-name>
   
   cd <your-microservice-name>
   ```
2. Complete all 3 TODOs in `src/main.ts` and `src/MyMicroservice.ts` files
3. Check that the environment variable values in the `.env.dev` file are correct for your development environment
   * If you are using MongoDB, check
     - `MONGODB_HOST`
     - `MONGODB_PORT`
     - `MONGODB_USER`
     - `MONGODB_PASSWORD`
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
      * `KAFKA_HOST`
      * `KAFKA_PORT`
   * if you are using Redis as a message queue, check
      * `REDIS_HOST`
      * `REDIS_PORT`
   - if you are using Redis as a response cache, check
     - `REDIS_CACHE_HOST`
     - `REDIS_CACHE_PORT`
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
    ```bash
    npm install
    npm run start:dev
   
    # to run unit tests
    npm test
    ```
   There is one example service in `src/services/example` directory that you can use as a basis for your own service(s).
   If/When you don't need that example service anymore, just delete the `src/services/example` directory and remove example service from `MicroserviceImpl` class.
6. You can test your microservice API using [Postman](https://www.postman.com/downloads/)
   1. Launch Postman
   2. Choose Import and then choose file `postman/<your-microservice-name>_api_postman_collection.json`

### <a name="integration-testing-in-development-environment"></a> Integration testing in development environment

### <a name="cicd"></a> CI/CD
