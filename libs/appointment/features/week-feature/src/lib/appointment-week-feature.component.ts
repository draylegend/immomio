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
  styleUrls: ['./appointment-week-feature.component.scss'],
  templateUrl: './appointment-week-feature.component.html',
  imports: [
    CalendarComponent,
    FilterComponent,
    NextViewingComponent,
    PushModule,
    WeekComponent,
  ],
})
export class AppointmentWeekFeatureComponent {
  constructor(public facade: AppointmentFacade) {}
}
