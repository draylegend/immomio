import { Field, Int, ObjectType } from '@nestjs/graphql';
import { AddressObject } from './address.object';
import { UserObject } from './user.object';

@ObjectType()
export class PropertyObject {
  @Field()
  id!: string;

  @Field()
  name!: string;

  @Field(() => Int)
  inviteeCount!: number;

  @Field(() => AddressObject)
  address!: AddressObject;

  @Field(() => UserObject)
  user!: UserObject;
}
