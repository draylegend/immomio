import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'today',
  standalone: true,
})
export class TodayPipe implements PipeTransform {
  transform(date: Date): boolean {
    const d = new Date();

    return (
      date.getFullYear() === d.getFullYear() &&
      date.getMonth() === d.getMonth() &&
      date.getDate() === d.getDate()
    );
  }
}
