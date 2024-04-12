import { ComponentData } from '../../../../../core/_part/component/js/component-data';
import { LogoSizes } from './logo-sizes';

const DEFAULT_TEXT = 'République<br>Française';

class LogoData extends ComponentData {
  constructor (id, text = DEFAULT_TEXT, size = null, classes = [], attributes = {}) {
    super(id, classes, attributes);
    this._text = text;
    this.initValue('_size', size, LogoSizes, LogoSizes.MEDIUM);
  }

  get text () {
    return this._text;
  }

  set text (value) {
    this._text = value;
  }

  get size () {
    return this._size;
  }

  set size (value) {
    this.setValue('_size', value, LogoSizes);
  }

  get classes () {
    const classes = [
      'fr-logo',
      ... super.classes
    ];

    if (this._size !== 'md') classes.push(`fr-logo--${this._size}`);

    return classes;
  }
}

export { LogoData };
