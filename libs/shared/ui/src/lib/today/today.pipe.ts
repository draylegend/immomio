import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'today',
  standalone: true,
})
export class TodayPipe implements PipeTransform {
  transform(date: Date): boolean {
    const d = new Date();

    return date.getDate() === d.getDate();
  }
}
