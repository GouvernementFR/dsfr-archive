import { Data } from './data';

class ComponentData extends Data {
  constructor (id, classes = [], attributes = {}) {
    super(classes, attributes);
    this._id = id;
  }

  get id () {
    return this._id;
  }

  set id (value) {
    if (value === this._id) return;
    this._id = value;
  }

  get attributes () {
    const attributes = {
      ...super.attributes
    };
    if (this._id) attributes.id = this._id;
    return attributes;
  }
}

export { ComponentData };
