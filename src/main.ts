import 'reflect-metadata';
import {initialize, initializeDefaultJaegerTracing, startHttpServerFor} from 'backk';
import MyMicroservice from './MyMicroservice';

initializeDefaultJaegerTracing();

async function startMicroservice() {
  const myMicroservice = new MyMicroservice();
  await initialize(myMicroservice);
  await startHttpServerFor(myMicroservice);
}
// noinspection JSIgnoredPromiseFromCall
startMicroservice();

