import { Properties } from '../../Infrastructure/interfaces';

import { v4 as uuidv4 } from 'uuid';
import { convertToString } from '../../Infrastructure/convertSafely';

export class Article {
  public readonly id: string;
  public readonly name: string;

  constructor({ id, name }: Properties<Article>) {
    this.id = convertToString({ value: id, defaultValue: uuidv4() }) as string;
    this.name = convertToString({ value: name }) as string;
  }
}
