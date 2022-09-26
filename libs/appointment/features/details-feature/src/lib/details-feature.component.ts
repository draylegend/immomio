import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  templateUrl: './details-feature.component.html',
})
export class DetailsFeatureComponent {}
