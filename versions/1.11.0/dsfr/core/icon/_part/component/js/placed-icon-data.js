import { Data } from '../../../../_part/component/js/data';
import { IconPlaces } from './icon-places';

class PlacedIconData extends Data {
constructor ( name,  place= IconPlaces.ONLY, classes = [], attributes = {}) {
    super(classes, attributes);
    this._name = name;
    this._place = this.initValue(place, IconPlaces, IconPlaces.ONLY);
  }

  get name () {
    return this._name;
  }

  set name (value) {
    this._name = value;
  }

  get place () {
    return this._place;
  }

  set place (value) {
    if (!this.validateValue(value, IconPlaces, this._place)) return;
    this._place = value;
  }

  get classes () {
    const classes = [
      ...this._classes,
      `fr-icon-${ this._name}`
    ];
    return classes;
  }

  getPlaceModifier (baseClass) {
    if (this._place === IconPlaces.ONLY) return null;
    return `${baseClass}--${this._place}`;
  }

}

export { PlacedIconData };
