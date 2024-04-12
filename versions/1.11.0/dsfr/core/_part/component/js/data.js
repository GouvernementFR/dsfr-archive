class Data {
  constructor (classes = [], attributes = {}) {
    this._classes = classes || [];
    this._attributes = attributes || {};
  }

  get classes () {
    return this._classes;
  }

  get attributes () {
    return this._attributes;
  }

  initValue (property, value, constant, defaultValue) {
    this[property] = Object.values(constant).includes(value) ? value : defaultValue;
  }

  setValue (property, value, constant) {
    if (this[property] === value) return false;
    if (!Object.values(constant).includes(value)) return false;
    this[property] = value;
    return true;
  }

  setInstance (property, value, instance, allowArray = false, allowNull = true) {
    switch (true) {
      case allowNull && !value:
        this[property] = null;
        break;

      case value instanceof instance:
      case allowArray && Array.isArray(value) && value.every(item => item instanceof instance):
        this[property] = value;
        break;

      default:
        throw new Error(`${property.replace(/^_/, '')} must be an instance of ${instance}`);
    }
  }
}

export { Data };
