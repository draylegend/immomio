import { Query, Resolver } from '@nestjs/graphql';
import { AppointmentObject } from './appointment.object';
import { AppointmentService } from './appointment.service';

@Resolver()
export class AppointmentResolver {
  constructor(private service: AppointmentService) {}

  @Query(() => [AppointmentObject])
  appointments(): AppointmentObject[] {
    return this.service.appointments();
  }
}
