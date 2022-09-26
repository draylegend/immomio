import { KeyValuePipe, NgForOf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
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

  @Output() clickChanges = new EventEmitter<string[]>();

  @HostBinding('style') get style(): Record<string, string> {
    const [x, y] = this.offsets?.split(',') || [];

    return {
      '--viewings-offset-x': x,
      '--viewings-offset-y': y,
    };
  }

  @HostListener('click') hostClick() {
    this.clickChanges.emit(this.appointments?.map(a => a.id));
  }
}
