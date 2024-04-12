import { ComponentData } from '../../../../../core/_part/component/js/component-data';
import { InputTypes } from './input-types';
import { LabelData } from '../../../../form/_part/component/js/label/label-data';

class InputData extends ComponentData {
constructor (id, label = null, type = InputTypes.TEXT, placeholder = '', classes = [], attributes = {}) {
    super(id, classes, attributes);
    this.label = label;
    this.initValue('_type', type, InputTypes, InputTypes.TEXT);
    this._placeholder = placeholder;
  }

  get id () {
    return super.id;
  }

  set id (value) {
    super.id = value;
    if (this._label) this._label.htmlFor = value;
  }

  get label () {
    return this._label;
  }

  set label (value) {
    if (this.setInstance('_label', value, LabelData)) this._label.htmlFor = this.id;
  }

  get type () {
    return this._type;
  }

  set type (value) {
    this.setValue('_type', value, InputTypes);
  }

  get placeholder () {
    return this._placeholder;
  }

  set placeholder (value) {
    this._placeholder = value;
  }

  get attributes () {
    const attributes = {
      ... super.attributes,
      type: this._type
    };

    if (this._placeholder) {
      attributes.placeholder = this._placeholder;
    }

    return attributes;
  }

  get classes () {
    const classes = [
      'fr-input',
      ... super.classes
    ];

    return classes;
  }


}

export default InputData;
