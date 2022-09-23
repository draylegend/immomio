import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'im-root',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent {}
