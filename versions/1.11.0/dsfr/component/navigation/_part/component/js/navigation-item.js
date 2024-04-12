import { Component } from '../../../../../core/_part/component/js/component';
import { ItemTypes } from './item-types';
import { NavigationLink } from './navigation-link';
import { NavigationMenu } from './navigation-menu';
import { NavigationMegaMenu } from './navigation-mega-menu';
import { NavigationItemAlign } from './navigation-item-align';

class NavigationItem extends Component {
  constructor (data = {
    id : '',
    classes : [],
    attributes : {},
    type: null,
    align: null
  }) {
    super(data);

    this._align = this.initValue(data.align, NavigationItemAlign, NavigationItemAlign.LEFT);
    const type = this.initValue(data.type, ItemTypes, ItemTypes.LINK);
    switch (type) {
      case ItemTypes.LINK:
        this._element = new this.LinkClass(data);
        break;

      case ItemTypes.MENU:
        this._element = new this.MenuClass(data);
        break;

      case ItemTypes.MEGA_MENU:
        this._element = new this.MegaMenuClass(data);
        break;
    }
  }

  get LinkClass () {
    return NavigationLink;
  }

  get MenuClass () {
    return NavigationMenu;
  }

  get MegaMenuClass () {
    return NavigationMegaMenu;
  }

  get align () {
    return this._align;
  }

  set align (value) {
    if (!this.validateValue(value, NavigationItemAlign, this._align)) return;
    this._align = value;
  }

  get classes () {
    const classes = [
      ...super.classes,
      'fr-nav__item'
    ];

    if (this._align === NavigationItemAlign.RIGHT) {
      classes.push('fr-nav__item--right');
    }

    return classes;
  }

  get html () {
    return `<li ${this.includeClasses()} ${this.includeAttributes()}>${this._element.html}</li>`;
  }
}

export { NavigationItem };
