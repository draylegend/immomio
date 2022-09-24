import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppointmentFacade } from '@immomio/appointment/domain';
import { FilterComponent } from '@immomio/appointment/ui';
import { PushModule } from '@ngrx/component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  templateUrl: './appointment-feature.component.html',
  imports: [PushModule, FilterComponent],
})
export class AppointmentFeatureComponent {
  constructor(public facade: AppointmentFacade) {}
}
