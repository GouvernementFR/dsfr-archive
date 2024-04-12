import { ComponentData } from '../../../../../core/_part/component/js/component-data';
import { ButtonSizes } from './button-sizes';
import { ButtonKinds } from './button-kinds';
import { PlacedIconData } from '../../../../../core/icon/_part/component/js/placed-icon-data';

class ButtonData extends ComponentData {
  constructor (id, text = 'libellé', size = null, kind = null, icon = null,  disabled = false, title = null, tagName = 'button', type = null, classes = [], attributes = {}) {
    super(id, classes, attributes);
    this._text = text;
    this.initValue('_size', size, ButtonSizes, ButtonSizes.MEDIUM);
    this.initValue('_kind', kind, ButtonKinds, ButtonKinds.PRIMARY);
    this.icon = icon;
    this._disabled = disabled === true;
    this._title = title;
    this._tagName = tagName || 'button';
    this._type = type;
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
    this.setValue('_size', value, ButtonSizes);
  }

  get kind () {
    return this._kind;
  }

  set kind (value) {
    this.setValue('_kind', value, ButtonKinds);
  }

  get icon () {
    return this._icon;
  }

  set icon (value) {
    this.setInstance('_icon', value, PlacedIconData);
  }

  get disabled () {
    return this._disabled;
  }

  set disabled (value) {
    this._disabled = value === true;
  }

  get title () {
    return this._title;
  }

  set title (value) {
    this._title = value;
  }

  get tagName () {
    return this._tagName;
  }

  set tagName (value) {
    this._tagName = value;
  }

  get type () {
    return this._type;
  }

  set type (value) {
    this._type = value;
  }

  get classes () {
    const classes = [
      'fr-btn',
      ... super.classes
    ];

    if (this._size && this._size !== 'md') classes.push(`fr-btn--${this._size}`);
    if (this._kind && this._kind !== ButtonKinds.PRIMARY) classes.push(`fr-btn--${this._kind}`);

    if (this._icon) {
      classes.push(...this._icon.classes);
      const modifier = this._icon.getPlaceModifier('fr-btn');
      if (modifier) classes.push(modifier);
    }

    return classes;
  }

}

export { ButtonData };
