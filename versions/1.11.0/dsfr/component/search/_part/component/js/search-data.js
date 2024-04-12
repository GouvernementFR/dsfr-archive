import { ComponentData } from '../../../../../core/_part/component/js/component-data';
import { LabelData } from '../../../../form/_part/component/js/label/label-data';
import { Input } from '../../../../input/_part/component/js/input';
import InputData from '../../../../input/_part/component/js/input-data';
import { SearchSizes } from './search-sizes';
import { InputTypes } from '../../../../input/_part/component/js/input-types';
import { ButtonData } from '../../../../button/_part/component/js/button-data';

class SearchData extends ComponentData {
  constructor (id, text = 'Rechercher', size = null, placeholder = '', classes = [], attributes = {}) {
    super(id, classes, attributes);
    this._label = new LabelData(`${id}-label`, text);
    this._input = new InputData(`${id}-input`, this._label, InputTypes.SEARCH, placeholder);
    this._button = new ButtonData(`${id}-button`, text);
    this.initValue('_size', size, SearchSizes, SearchSizes.MEDIUM);
  }

  get label () {
    return this._label;
  }

  get input () {
    return this._input;
  }

  get button () {
    return this._button;
  }

  get text () {
    return this._label.text;
  }

  set text (value) {
    this._label.text = value;
    this._button.text = value;
  }

  get placeholder () {
    return this._input.placeholder;
  }

  set placeholder (value) {
    this._input.placeholder = value;
  }

  get size () {
    return this._size;
  }

  set size (value) {
    this.setValue('_size', value, SearchSizes);
  }

  get classes () {
    const classes = [
      'fr-search-bar',
      ... super.classes
    ];

    if (this._size !== 'md') classes.push(`fr-search-bar--${this._size}`);

    return classes;
  }

  get attributes () {
    const attributes = {
      ... super.attributes,
      role: 'search'
    };

    return attributes;
  }
}

export { SearchData };
