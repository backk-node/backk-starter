docker-compose --env-file env.ci up
newman run postman/integration-tests-collection.json
docker-compose --env-file env.ci down
