import { Pipe, PipeTransform } from '@angular/core';

/**
 * Transforms numerical code into track's modality (major or minor key).
 *
 * @export
 * @class NamePipe
 * @implements {PipeTransform}
 */
@Pipe({
  name: 'modality',
})
export class ModalityPipe implements PipeTransform {
  transform(value: any) {
    switch (value) {
      case 0:
        return 'Major';
      case 1:
        return 'Minor';
      default:
        return null;
    }
  }
}
