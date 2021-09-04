import {_Id, AbstractDataStore, AllowForEveryUser, Many, One, PostQueryOperations, PromiseErrorOr} from 'backk';
import ExampleService from './ExampleService';
import ExampleEntity from './entities/ExampleEntity';
import {exampleServiceErrors} from "./errors/shoppingCartServiceErrors";

export default class ExampleServiceImpl extends ExampleService {
  constructor(dataStore: AbstractDataStore) {
    super(exampleServiceErrors, dataStore);
  }

  @AllowForEveryUser()
  deleteAllExampleEntities(): PromiseErrorOr<null> {
    return this.dataStore.deleteAllEntities(ExampleEntity);
  }

  @AllowForEveryUser()
  createExampleEntity(exampleEntity: ExampleEntity): PromiseErrorOr<One<ExampleEntity>> {
    return this.dataStore.createEntity(ExampleEntity, exampleEntity);
  }

  @AllowForEveryUser()
  getExampleEntities(postQueryOperations: PostQueryOperations): PromiseErrorOr<Many<ExampleEntity>> {
    this.dataStore.getAllEntities(ExampleEntity, postQueryOperations, false);
  }

  @AllowForEveryUser()
  getExampleEntity({ _id }: _Id): PromiseErrorOr<One<ExampleEntity>> {
    this.dataStore.getEntityById(ExampleEntity, _id);
  }

  @AllowForEveryUser()
  updateExampleEntity(exampleEntity: ExampleEntity): PromiseErrorOr<null> {
    this.dataStore.updateEntity(ExampleEntity, exampleEntity);
  }

  @AllowForEveryUser()
  deleteExampleEntity({ _id }: _Id):  PromiseErrorOr<null> {
    this.dataStore.deleteEntityById(ExampleEntity, _id);
  }
}
