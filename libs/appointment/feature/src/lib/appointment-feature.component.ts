import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './appointment-feature.component.html',
  standalone: true,
})
export class AppointmentFeatureComponent {}
