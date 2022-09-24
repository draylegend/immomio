import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppointmentFacade } from '@immomio/appointment/domain';
import { PushModule } from '@ngrx/component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  templateUrl: './appointment-feature.component.html',
  imports: [PushModule],
})
export class AppointmentFeatureComponent {
  constructor(public facade: AppointmentFacade) {}
}
