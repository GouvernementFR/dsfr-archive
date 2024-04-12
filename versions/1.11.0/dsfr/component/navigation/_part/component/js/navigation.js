import { Component } from '../../../../../core/_part/component/js/component';
import { NavigationList } from './navigation-list';

class Navigation extends Component {
  constructor (data = {
    id : 'navigation',
    classes : [],
    attributes : {},
    items : []
  }) {
    super(data);
    this._list = new this.ListClass({ items : data.items });
  }

  get ListClass () {
    return NavigationList;
  }

  get list () {
    return this._list;
  }

  get classes () {
    return [
      'fr-nav',
      ... super.classes
    ];
  }

  get attributes () {
    const attributes = {
      role: 'navigation',
      'aria-label': 'Menu principal',
      ... super.attributes
    };

    return attributes;
  }

  get html () {
    return `<nav ${this.includeClasses()} ${this.includeAttributes()}>${this._list.html}</nav>`;
  }
}

export { Navigation };
