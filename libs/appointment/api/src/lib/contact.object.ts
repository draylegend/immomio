import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ContactObject {
  @Field()
  firstName!: string;

  @Field()
  name!: string;

  @Field()
  email!: string;

  @Field()
  mobile!: string;

  @Field()
  phone!: string;

  @Field()
  fullName!: string;
}
