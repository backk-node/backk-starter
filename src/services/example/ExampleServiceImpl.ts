import {
  AllowForEveryUser,
  CrudEntityService,
  DataStore,
  DefaultPostQueryOperations,
  Many,
  NoCaptcha,
  One,
  PromiseErrorOr,
  _Id,
} from 'backk';
import { exampleServiceErrors } from './errors/shoppingCartServiceErrors';
import { ExampleService } from './ExampleService';
import ExampleEntity from './types/entities/ExampleEntity';

export default class ExampleServiceImpl extends CrudEntityService implements ExampleService {
  constructor(dataStore: DataStore) {
    super(exampleServiceErrors, dataStore);
  }

  @AllowForEveryUser()
  deleteAllExampleEntities(): PromiseErrorOr<null> {
    return this.dataStore.deleteAllEntities(ExampleEntity);
  }

  @AllowForEveryUser()
  @NoCaptcha('Not public interface')
  createExampleEntity(exampleEntity: ExampleEntity): PromiseErrorOr<One<ExampleEntity>> {
    return this.dataStore.createEntity(ExampleEntity, exampleEntity);
  }

  @AllowForEveryUser()
  getExampleEntities(postQueryOperations: DefaultPostQueryOperations): PromiseErrorOr<Many<ExampleEntity>> {
    return this.dataStore.getAllEntities(ExampleEntity, postQueryOperations, false);
  }

  @AllowForEveryUser()
  getExampleEntity({ _id }: _Id): PromiseErrorOr<One<ExampleEntity>> {
    return this.dataStore.getEntityById(ExampleEntity, _id, new DefaultPostQueryOperations(), true);
  }

  @AllowForEveryUser()
  updateExampleEntity(exampleEntity: ExampleEntity): PromiseErrorOr<null> {
    return this.dataStore.updateEntity(ExampleEntity, exampleEntity);
  }

  @AllowForEveryUser()
  deleteExampleEntity({ _id }: _Id): PromiseErrorOr<null> {
    return this.dataStore.deleteEntityById(ExampleEntity, _id);
  }
}
