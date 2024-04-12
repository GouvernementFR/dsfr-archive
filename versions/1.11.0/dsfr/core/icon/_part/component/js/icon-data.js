import { ComponentData } from '../../../../_part/component/js/component-data';
import { IconSizes } from './icon-sizes';


class IconData extends ComponentData {
constructor (id, name, size = IconSizes.MEDIUM, classes = [], attributes = {}) {
    super(id, classes, attributes);
    this._name = name;
    this._size = this.initValue(size, IconSizes, IconSizes.MEDIUM);
  }

  get name () {
    return this._name;
  }

  set name (value) {
    this._name = value;
  }

  get size () {
    return this._size;
  }

  set size (value) {
    if (!this.validateValue(value, IconSizes, this._size)) return;
    this._size = value;
  }

  get classes () {
    const classes = [
      ...this._classes,
      `fr-icon-${ this._name}`
    ];
    return classes;
  }

}
