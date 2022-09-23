import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AddressObject {
  @Field()
  street!: string;

  @Field()
  houseNumber!: string;

  @Field()
  city!: string;

  @Field()
  country!: string;

  @Field()
  zipCode!: string;
}
