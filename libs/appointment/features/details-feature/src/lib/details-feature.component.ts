import { JsonPipe, Location } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
} from '@angular/core';
import { AppointmentFacade } from '@immomio/appointment/domain';
import { PushModule } from '@ngrx/component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  styleUrls: ['./details-feature.component.scss'],
  templateUrl: './details-feature.component.html',
  imports: [PushModule, JsonPipe],
})
export class DetailsFeatureComponent {
  constructor(public facade: AppointmentFacade, private location: Location) {}

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
