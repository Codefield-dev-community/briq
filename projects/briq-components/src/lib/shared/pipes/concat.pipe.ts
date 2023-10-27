import { Pipe, PipeTransform } from '@angular/core';
import { IncludeContract } from '../../../../personas/shared/persona.contract';

@Pipe({
  name: 'concat'
})
export class ConcatPipe implements PipeTransform {
  /**
   * Concatenate an array of items together
   *
   * @param items: string[]
   * @param glue: string = ','
   * @param endingGlue: string = 'en'
   * @returns string
   */
  public transform(items: IncludeContract[], glue: string = ', ', endingGlue = 'en'): string | null {
    const itemNames = items.map(item => item.name);
    const lastItem: string = itemNames?.pop();

    return `${itemNames.join(glue)} ${endingGlue} ${lastItem}`;
  }
}
