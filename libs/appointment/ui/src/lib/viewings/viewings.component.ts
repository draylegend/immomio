import { KeyValuePipe, NgForOf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import { AppointmentObject } from '@immomio/appointment/api';

@Component({
  selector: 'im-viewings[appointments][offsets]',
  standalone: true,
  styleUrls: ['./viewings.component.scss'],
  templateUrl: './viewings.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgForOf, KeyValuePipe],
})
export class ViewingsComponent {
  @Input() appointments?: AppointmentObject[];

  @Input() offsets?: string;

  @HostBinding('style') get style(): Record<string, string> {
    const [x, y] = this.offsets?.split(',') || [];

    return {
      '--viewings-offset-x': x,
      '--viewings-offset-y': y,
    };
  }
}
