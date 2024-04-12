import { ComponentData } from '../../../../../../core/_part/component/js/component-data';

class HintData extends ComponentData {
  constructor (id, text = 'text', tagName = 'span', classes = [], attributes = {}) {
    super(id, classes, attributes);
    this._text = text;
    this._tagName = tagName;
  }

  get text () {
    return this._text;
  }

  set text (value) {
    this._text = value;
  }

  get tagName () {
    return this._tagName;
  }

  set tagName (value) {
    this._tagName = value;
  }

  get classes () {
    return [
      'fr-hint-text',
      ... super.classes
    ];
  }
}

export { HintData };
