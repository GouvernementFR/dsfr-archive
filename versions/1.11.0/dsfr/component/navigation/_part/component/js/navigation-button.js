import { Component } from '../../../../../core/_part/component/js/component';

class NavigationButton extends Component {
  constructor (data = {
    id : '',
    classes : [],
    attributes : {},
    label : '',
    isCurrent : false,
    collapseId : ''
  }) {
    super(data);
    this._label = data.label;
    this._isCurrent = data.isCurrent === true;
    this._collapseId = data.collapseId;
  }

  get label () {
    return this._label;
  }

  set label (value) {
    this._label = value;
  }

  get classes () {
    const classes = [
      'fr-nav__btn',
      ... super.classes
    ];

    return classes;
  }

  get attributes () {
    const attributes = {
      'aria-expanded': 'false',
      'aria-controls': this._collapseId,
      ... super.attributes
    }

    if (this._isCurrent) attributes['aria-current'] = 'true';

    return attributes;
  }

  get html () {
    return `<button ${this.includeClasses()} ${this.includeAttributes()}>${this._label}</button>`
  }
}

export { NavigationButton };
