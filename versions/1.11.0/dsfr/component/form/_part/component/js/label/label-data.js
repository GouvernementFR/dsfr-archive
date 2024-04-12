import { ComponentData } from '../../../../../../core/_part/component/js/component-data';
import { HintData } from '../hint/hint-data';

class LabelData extends ComponentData {
  constructor (id, text = 'text', htmlFor = '', hint = null, classes = [], attributes = {}) {
    super(id, classes, attributes);
    this._text = text;
    this._htmlFor = htmlFor;
    this.hint = hint;
  }

  get text () {
    return this._text;
  }

  set text (value) {
    this._text = value;
  }

  get htmlFor () {
    return this._htmlFor;
  }

  set htmlFor (value) {
    this._htmlFor = value;
  }

  get hint () {
    return this._hint;
  }

  set hint (value) {
    this.setInstance('_hint', value, HintData, true);
  }

  get classes () {
    return [
      'fr-label',
      ... super.classes
    ];
  }

  get attributes () {
    const attributes = {
      ... super.attributes
    };

    if (this._htmlFor) {
      attributes.for = this._htmlFor;
    }

    return attributes;
  }
}

export { LabelData };
