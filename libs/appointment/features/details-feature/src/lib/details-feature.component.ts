import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  styleUrls: ['./details-feature.component.scss'],
  templateUrl: './details-feature.component.html',
})
export class DetailsFeatureComponent {}
