import { MaxLength, _Id, Entity, IsAnyString, Lengths, NotUnique, ReadWrite } from 'backk';

@Entity()
export default class ExampleEntity extends _Id {
  @MaxLength(Lengths._64)
  @IsAnyString()
  @NotUnique()
  @ReadWrite()
  public exampleProperty!: string;
}
