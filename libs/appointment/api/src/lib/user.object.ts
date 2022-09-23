import { Field, ObjectType } from '@nestjs/graphql';
import { ProfileObject } from './profile.object';

@ObjectType()
export class UserObject {
  @Field(() => ProfileObject)
  profile!: ProfileObject;

  @Field()
  usertype!: string;
}
