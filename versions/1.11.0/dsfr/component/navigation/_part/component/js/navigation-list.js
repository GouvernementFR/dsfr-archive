import { Component } from '../../../../../core/_part/component/js/component';
import { NavigationItem } from './navigation-item';

class NavigationList extends Component {
  constructor (data = {
    id : '',
    classes : [],
    attributes : {},
    items : []
  }) {
    super(data);
    this._items = [];
    data.items.forEach(item => this.addItem(item));
  }

  addItem (item) {
    this._items.push(new NavigationItem(item));
  }

  get items () {
    return this._items;
  }

  get classes () {
    const classes = [
      ...super.classes,
      'fr-nav__list'
    ];

    return classes;
  }

  get html () {
    const items = this._items.map(item => item.html).join('');

    return `<ul ${this.includeClasses()} ${this.includeAttributes()}>${items}</ul>`;
  }

}

export { NavigationList };
