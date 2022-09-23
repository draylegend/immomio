import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ContactObject } from './contact.object';
import { PropertyObject } from './property.object';

@ObjectType()
export class AppointmentObject {
  @Field()
  id!: string;

  @Field()
  date!: string;

  @Field(() => Int)
  maxInviteeCount!: number;

  @Field(() => Int)
  attendeeCount!: number;

  @Field(() => Boolean)
  showContactInformation!: boolean;

  @Field(() => ContactObject)
  contact!: ContactObject;

  @Field(() => PropertyObject)
  property!: PropertyObject;
}
