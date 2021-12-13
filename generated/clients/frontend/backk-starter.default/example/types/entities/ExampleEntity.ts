// DO NOT MODIFY THIS FILE! This is an auto-generated file
import { IsAnyString, IsString, Lengths, MaxLength, ValidateIf, _Id } from 'backk-frontend-utils';

export default class ExampleEntity extends _Id {
  @MaxLength(Lengths._64)
  @IsAnyString()
  @IsString()
  @ValidateIf((o: any) => o.exampleProperty !== undefined, {
    groups: ['__backk_update__'],
  })
  public exampleProperty: string | undefined = '';
}
