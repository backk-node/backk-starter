import 'reflect-metadata';
import {initialize, initializeDefaultJaegerTracing, startHttpServerFor} from 'backk';
import {microservice} from "./microservice";

initializeDefaultJaegerTracing();

async function startMicroservice() {
  await initialize(microservice);

  // TODO Start one or more: HTTP server/consumer(s)
  await startHttpServerFor(microservice);
  // await startKafkaConsumerFor(myMicroservice);
  // await startRedisConsumerFor(myMicroservice);
}
// noinspection JSIgnoredPromiseFromCall
startMicroservice();

