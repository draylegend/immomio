import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'im-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [RouterOutlet],
})
export class AppComponent {}
