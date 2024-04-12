import { ComponentData } from '../../../../_part/component/js/component-data';

class ImageData extends ComponentData {
  constructor (id, src, isResponsive = false, alt = null, width = null, height = null, classes = [], attributes = {}) {
    super(id, classes, attributes);
    this._src = src;
    this._alt = alt;
    this._isResponsive = isResponsive === true;
    this._width = width;
    this._height = height;
  }

  get src () {
    return this._src;
  }

  set src (value) {
    this._src = value;
  }

  get alt () {
    return this._alt;
  }

  set alt (value) {
    this._alt = value;
  }

  get width () {
    return this._width;
  }

  set width (value) {
    this._width = value;
  }

  get height () {
    return this._height;
  }

  set height (value) {
    this._height = value;
  }

  get isResponsive () {
    return this._isResponsive;
  }

  set isResponsive (value) {
    this._isResponsive = value;
  }

  get attributes () {
    const attributes = {
      ... super.attributes
    };
    if (this._width) attributes.width = this._width;
    if (this._height) attributes.height = this._height;
    return attributes;
  }

  get classes () {
    const classes = [
      ... super.classes
    ];

    if (!this._isResponsive) classes.pop('fr-responsive-img');

    return classes;
  }

}

export { ImageData };
