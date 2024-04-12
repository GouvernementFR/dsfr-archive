import { ComponentData } from './component-data';

class Component {
  constructor (data = new ComponentData('')) {
    this._data = data;
  }

  get data () {
    return this._data;
  }

  includeClasses (classes = null) {
    classes ??= this._data.classes;
    if (!classes || classes.length === 0) return '';
    return `class="${classes.join(' ')}"`;
  }

  includeAttributes (attributes = null) {
    attributes ??= this._data.attributes;
    const keys = Object.keys(attributes);
    if (keys.length === 0) return '';
    return keys.map(key => `${key}="${attributes[key]}"`).join(' ');
  }

  get html () {
    return '';
  }
}

export { Component };
