import { Location } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
} from '@angular/core';
import { AppointmentFacade } from '@immomio/appointment/domain';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  styleUrls: ['./details-feature.component.scss'],
  templateUrl: './details-feature.component.html',
})
export class DetailsFeatureComponent {
  constructor(private facade: AppointmentFacade, private location: Location) {}

  @HostListener('click', ['$event.target']) hostClick(e: HTMLElement) {
    if (e.closest('section')) {
      return;
    }

    this.facade.history.pop();
    if (this.facade.history.length > 0) {
      this.location.back();
    } else {
      this.facade.navigateBack();
    }
  }
}
