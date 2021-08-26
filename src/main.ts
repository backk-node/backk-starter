import 'reflect-metadata';
import {initialize, initializeDefaultJaegerTracing, startHttpServerFor} from 'backk';
import MyMicroservice from './MyMicroservice';

initializeDefaultJaegerTracing();

async function startMicroservice() {
  const myMicroservice = new MyMicroservice();
  await initialize(myMicroservice);

  // TODO Start one or more: HTTP server/consumer(s)
  await startHttpServerFor(myMicroservice);
  // await startKafkaConsumerFor(myMicroservice);
  // await startRedisConsumerFor(myMicroservice);
}
// noinspection JSIgnoredPromiseFromCall
startMicroservice();

