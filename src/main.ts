import 'reflect-metadata';
import { initializeDefaultJaegerTracing } from 'backk';
import microservice from './microservice';

initializeDefaultJaegerTracing();

async function startMicroservice() {
  await microservice.initialize();

  // TODO Start one or more: HTTP server/consumer(s)
  await microservice.startHttpServer();
  // await microservice.startKafkaConsumer();
  // await microservice.startRedisConsumer();
}
// noinspection JSIgnoredPromiseFromCall
startMicroservice();
