// DO NOT MODIFY THIS FILE! This is an auto-generated file
import { IsAnyString, Lengths, MaxLength, ReadWrite, _Id } from 'backk-frontend-utils';

export default class ExampleEntity extends _Id {
  @MaxLength(Lengths._64)
  @IsAnyString()
  @ReadWrite()
  public exampleProperty!: string;
}
