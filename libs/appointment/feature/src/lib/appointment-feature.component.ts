import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppointmentFacade } from '@immomio/appointment/domain';
import {
  CalendarComponent,
  FilterComponent,
  NextViewingComponent,
  WeekComponent,
} from '@immomio/appointment/ui';
import { PushModule } from '@ngrx/component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  styleUrls: ['./appointment-feature.component.scss'],
  templateUrl: './appointment-feature.component.html',
  imports: [
    CalendarComponent,
    FilterComponent,
    NextViewingComponent,
    PushModule,
    WeekComponent,
  ],
})
export class AppointmentFeatureComponent {
  constructor(public facade: AppointmentFacade) {}
}
