import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordCountPipe',
})
export class WordCountPipePipe implements PipeTransform {
  transform(value: string): number {
    if (!value || value.trim().length === 0) {
      return 0
    }

    return value.trim().split(/\s+/).length;
  }
}
