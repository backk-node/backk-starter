// DO NOT MODIFY THIS FILE! This is an auto-generated file
import {
  callRemoteService,
  DefaultPostQueryOperationsImpl,
  Many,
  One,
  PostQueryOperations,
  PromiseErrorOr,
  validateServiceFunctionArgumentOrThrow,
  _Id,
} from 'backk-frontend-utils';
import MicroserviceOptions from '../_backk/MicroserviceOptions';
import ExampleEntity from './types/entities/ExampleEntity';

export interface ExampleService {
  deleteAllExampleEntities(): PromiseErrorOr<null>;
  createExampleEntity(arg: ExampleEntity): PromiseErrorOr<One<ExampleEntity>>;
  getExampleEntities(arg: PostQueryOperations): PromiseErrorOr<Many<ExampleEntity>>;
  getExampleEntity(arg: _Id): PromiseErrorOr<One<ExampleEntity>>;
  updateExampleEntity(arg: ExampleEntity): PromiseErrorOr<null>;
  deleteExampleEntity(arg: _Id): PromiseErrorOr<null>;
}

export class ExampleServiceImpl implements ExampleService {
  async deleteAllExampleEntities(): PromiseErrorOr<null> {
    return callRemoteService(
      'backk-starter',
      'exampleService.deleteAllExampleEntities',
      undefined,
      'default',
      MicroserviceOptions.fqdn,
      MicroserviceOptions.accessTokenStorageEncryptionKey
    );
  }

  async createExampleEntity(exampleEntity: ExampleEntity): PromiseErrorOr<One<ExampleEntity>> {
    try {
      await validateServiceFunctionArgumentOrThrow(exampleEntity, ExampleEntity, 'create');
    } catch (error: any) {
      return [
        null,
        {
          message: error.message,
        },
      ];
    }

    return callRemoteService(
      'backk-starter',
      'exampleService.createExampleEntity',
      exampleEntity,
      'default',
      MicroserviceOptions.fqdn,
      MicroserviceOptions.accessTokenStorageEncryptionKey
    );
  }

  async getExampleEntities(
    postQueryOperations: DefaultPostQueryOperationsImpl
  ): PromiseErrorOr<Many<ExampleEntity>> {
    try {
      await validateServiceFunctionArgumentOrThrow(
        postQueryOperations,
        DefaultPostQueryOperationsImpl,
        'other'
      );
    } catch (error: any) {
      return [
        null,
        {
          message: error.message,
        },
      ];
    }

    return callRemoteService(
      'backk-starter',
      'exampleService.getExampleEntities',
      postQueryOperations,
      'default',
      MicroserviceOptions.fqdn,
      MicroserviceOptions.accessTokenStorageEncryptionKey
    );
  }

  async getExampleEntity(_id: _Id): PromiseErrorOr<One<ExampleEntity>> {
    try {
      await validateServiceFunctionArgumentOrThrow(_id, _Id, 'other');
    } catch (error: any) {
      return [
        null,
        {
          message: error.message,
        },
      ];
    }

    return callRemoteService(
      'backk-starter',
      'exampleService.getExampleEntity',
      _id,
      'default',
      MicroserviceOptions.fqdn,
      MicroserviceOptions.accessTokenStorageEncryptionKey
    );
  }

  async updateExampleEntity(exampleEntity: ExampleEntity): PromiseErrorOr<null> {
    try {
      await validateServiceFunctionArgumentOrThrow(exampleEntity, ExampleEntity, 'update');
    } catch (error: any) {
      return [
        null,
        {
          message: error.message,
        },
      ];
    }

    return callRemoteService(
      'backk-starter',
      'exampleService.updateExampleEntity',
      exampleEntity,
      'default',
      MicroserviceOptions.fqdn,
      MicroserviceOptions.accessTokenStorageEncryptionKey
    );
  }

  async deleteExampleEntity(_id: _Id): PromiseErrorOr<null> {
    try {
      await validateServiceFunctionArgumentOrThrow(_id, _Id, 'other');
    } catch (error: any) {
      return [
        null,
        {
          message: error.message,
        },
      ];
    }

    return callRemoteService(
      'backk-starter',
      'exampleService.deleteExampleEntity',
      _id,
      'default',
      MicroserviceOptions.fqdn,
      MicroserviceOptions.accessTokenStorageEncryptionKey
    );
  }
}

const exampleService = new ExampleServiceImpl();
export default exampleService;
