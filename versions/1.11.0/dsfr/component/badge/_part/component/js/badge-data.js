import { ComponentData } from '../../../../../core/_part/component/js/component-data';
import { PlacedIconData } from '../../../../../core/icon/_part/component/js/placed-icon-data';
import { BadgeSizes } from './badge-sizes';
import { BadgeKinds } from './badge-kinds';

class BadgeData extends ComponentData {
  constructor (id, text = 'libellé', kind = null, size = null, icon= null, tagName = 'p', accent = null, removeIcon = false, hasEllipsis = false, classes = [], attributes = {}) {
    super(id, classes, attributes);
    this._text = text;
    this.initValue('_kind', kind, BadgeKinds, BadgeKinds.NONE);
    this.initValue('_size', size, BadgeSizes, BadgeSizes.MEDIUM);
    this.icon = icon;
    this._tagName = tagName;
    this._accent = accent;
    this._removeIcon = removeIcon === true;
    this._hasEllipsis = hasEllipsis === true;
  }

  get text () {
    return this._text;
  }

  set text (value) {
    this._text = value;
  }

  get kind () {
    return this._kind;
  }

  set kind (value) {
    this.setValue('_kind', value, BadgeKinds);
  }

  get size () {
    return this._size;
  }

  set size (value) {
    this.setValue('_size', value, BadgeSizes);
  }

  get icon () {
    return this._icon;
  }

  set icon (value) {
    this.setInstance('_icon', value, PlacedIconData);
  }

  get accent () {
    return this._accent;
  }

  set accent (value) {
    this._accent = value;
  }

  get tagName () {
    return this._tagName;
  }

  set tagName (value) {
    this._tagName = value;
  }

  get removeIcon () {
    return this._removeIcon;
  }

  set removeIcon (value) {
    this._removeIcon = value === true;
  }

  get hasEllipsis () {
    return this._hasEllipsis;
  }

  set hasEllipsis (value) {
    this._hasEllipsis = value === true;
  }

  get classes () {
    const classes = [
      'fr-badge',
      ... super.classes
    ];

    if (this._kind && this._kind !== BadgeKinds.NONE) classes.push(`fr-badge--${this._kind}`);
    if (this._size && this._size !== BadgeSizes.MEDIUM) classes.push(`fr-badge--${this._size}`);
    if (this._accent) classes.push(`fr-badge--${this._accent}`);
    if (this._noIcon) classes.push('fr-badge--no-icon');
    if (this._icon) classes.push(`fr-icon-${this._icon}`);

    return classes;
  }
}

export { BadgeData };
