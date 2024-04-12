import { ComponentData } from '../../../../../../core/_part/component/js/component-data';
import { ButtonSizes } from '../button-sizes';
import { IconPlaces } from '../../../../../../core/icon/_part/component/js/icon-places';
import { ButtonsGroupAlign } from './buttons-group-align';
import { ButtonsGroupInline } from './buttons-group-inline';

class ButtonsGroupData extends ComponentData {
  constructor (id, buttons, size = null, iconPlace = null, align = null, equisized = false, inline = null, inlineReverse = null, markup = 'ul', classes = [], attributes = {}) {
    super(id, classes, attributes);
    this._buttons = buttons;
    this._size = this.initValue(size, ButtonSizes, ButtonSizes.MEDIUM);
    this._iconPlace = this.initValue(iconPlace, IconPlaces, IconPlaces.ONLY);
    this._align = this.initValue(align, ButtonsGroupAlign, ButtonsGroupAlign.LEFT);
    this._equisized = equisized === true;
    this._inline = this.initValue(inline, ButtonsGroupInline, ButtonsGroupInline.NONE);
    this._inlineReverse = inlineReverse === true;
    this.markup = markup;
  }

  get buttons () {
    return this._buttons;
  }

  get size () {
    return this._size;
  }

  set size (value) {
    if (!this.validateValue(value, ButtonSizes, this._size)) return;
    this._size = value;
  }

  get iconPlace () {
    return this._iconPlace;
  }

  set iconPlace (value) {
    if (!this.validateValue(value, IconPlaces, this._iconPlace)) return;
    this._iconPlace = value;
  }

  get align () {
    return this._align;
  }

  set align (value) {
    if (!this.validateValue(value, ButtonsGroupAlign, this._align)) return;
    this._align = value;
  }

  get equisized () {
    return this._equisized;
  }

  set equisized (value) {
    this._equisized = value === true;
  }

  get inline () {
    return this._inline;
  }

  set inline (value) {
    if (!this.validateValue(value, ButtonsGroupInline, this._inline)) return;
    this._inline = value;
  }

  get inlineReverse () {
    return this._inlineReverse;
  }

  set inlineReverse (value) {
    this._inlineReverse = value === true;
  }

  get markup () {
    return this._markup;
  }

  set markup (value) {
    this._markup = value;
    this._isList = this._markup === 'ul' || this._markup === 'ol';
  }

  get classes () {
    const classes = [
      'fr-btns-group',
      ...super.classes
    ];

    if (this._size !== 'md') classes.push(`fr-btns-group--${this._size}`);
    if (this._align !== 'left') classes.push(`fr-btns-group--${this._align}`);
    if (this._iconPlace !== 'only') classes.push(`fr-btns-group--${this._iconPlace}`);
    if (this._equisized) classes.push('fr-btns-group--equisized');
    switch (this._inline) {
      case ButtonsGroupInline.ALL:
        classes.push('fr-btns-group--inline');
        break;
      case ButtonsGroupInline.SMALL:
      case ButtonsGroupInline.MEDIUM:
      case ButtonsGroupInline.LARGE:
        classes.push(`fr-btns-group--inline-${this._inline}`);
        break;
    }
    if (this._inlineReverse) classes.push('fr-btns-group--inline-reverse');

    return classes;
  }
}

export { ButtonsGroupData };
