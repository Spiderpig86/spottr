import { Pipe, PipeTransform } from '@angular/core';

const UI_AVATARS_HOST = 'https://ui-avatars.com/api/?name=';
const UI_AVATARS_PARAMETERS = '&rounded=true';

/**
 * Pipe to fetch images with fallback to UI Avatars.
 *
 * @export
 * @class AvatarFallbackPipe
 * @implements {PipeTransform}
 */
@Pipe({
  name: 'avatar',
})
export class AvatarFallbackPipe implements PipeTransform {
  transform(url: string, name: string) {
    if (url) {
      return url;
    }

    return `${UI_AVATARS_HOST}${encodeURIComponent(
      name
    )}${UI_AVATARS_PARAMETERS}`;
  }
}
