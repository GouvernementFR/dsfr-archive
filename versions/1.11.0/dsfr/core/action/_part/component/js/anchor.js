import { Component } from '../../../../_part/component/js/component';

class Anchor extends Component {
  constructor (data = {
    id : '',
    classes : [],
    attributes : {},
    label: 'libellé',
    href : null,
    title : null,
    isExternal : false,
  }) {
    super(data);
    this._label = data.label;
    this._href = data.href;
    this._title = data.title;
    this._isExternal = data.isExternal === true;
  }

  get attributes () {
    const attributes = {
      ... super.attributes
    };

    if (this._title) attributes.title = this._title;

    if (this._href !== null) {
      attributes.href = this._href;
      if (this._isExternal) {
        attributes.rel = 'noopener external';
        attributes.target = '_blank';
      }
    }
    else {
      attributes['aria-disabled'] = "true";
      attributes.role = 'link';
    }

    return attributes;
  }

  get html () {
    return `<a ${this.includeClasses()} ${this.includeAttributes()}>${this._label}</a>`;
  }
}

export { Anchor };
