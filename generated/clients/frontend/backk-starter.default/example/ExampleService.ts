// DO NOT MODIFY THIS FILE! This is an auto-generated file
import {
  callRemoteService,
  DefaultPostQueryOperations,
  Many,
  One,
  PromiseErrorOr,
  _Id,
} from 'backk-frontend-utils';
import ExampleEntity from './types/entities/ExampleEntity';

export default class ExampleService {
  deleteAllExampleEntities(): PromiseErrorOr<null> {
    return callRemoteService(
      'backk-starter',
      'exampleService.deleteAllExampleEntities',
      undefined,
      'default'
    );
  }

  createExampleEntity(exampleEntity: ExampleEntity): PromiseErrorOr<One<ExampleEntity>> {
    return callRemoteService('backk-starter', 'exampleService.createExampleEntity', exampleEntity, 'default');
  }

  getExampleEntities(postQueryOperations: DefaultPostQueryOperations): PromiseErrorOr<Many<ExampleEntity>> {
    return callRemoteService(
      'backk-starter',
      'exampleService.getExampleEntities',
      postQueryOperations,
      'default'
    );
  }

  getExampleEntity(_id: _Id): PromiseErrorOr<One<ExampleEntity>> {
    return callRemoteService('backk-starter', 'exampleService.getExampleEntity', _id, 'default');
  }

  updateExampleEntity(exampleEntity: ExampleEntity): PromiseErrorOr<null> {
    return callRemoteService('backk-starter', 'exampleService.updateExampleEntity', exampleEntity, 'default');
  }

  deleteExampleEntity(_id: _Id): PromiseErrorOr<null> {
    return callRemoteService('backk-starter', 'exampleService.deleteExampleEntity', _id, 'default');
  }
}
