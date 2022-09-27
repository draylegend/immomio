import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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
    RouterOutlet,
  ],
})
export class AppointmentWeekFeatureComponent {
  constructor(public facade: AppointmentFacade) {
    facade.load();
  }
}
