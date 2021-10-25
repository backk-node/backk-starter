import { CrudEntityService, _Id, Many, One, PostQueryOperations, PromiseErrorOr } from 'backk';
import ExampleEntity from './entities/ExampleEntity';

export default abstract class ExampleService extends CrudEntityService {
  abstract deleteAllExampleEntities(): PromiseErrorOr<null>;
  abstract createExampleEntity(arg: ExampleEntity): PromiseErrorOr<One<ExampleEntity>>;
  abstract getExampleEntities(arg: PostQueryOperations): PromiseErrorOr<Many<ExampleEntity>>;
  abstract getExampleEntity(arg: _Id): PromiseErrorOr<One<ExampleEntity>>;
  abstract updateExampleEntity(arg: ExampleEntity): PromiseErrorOr<null>;
  abstract deleteExampleEntity(arg: _Id): PromiseErrorOr<null>;
}
