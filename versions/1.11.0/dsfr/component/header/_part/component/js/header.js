import { Component } from '../../../../../core/_part/component/js/component';
import { Body } from './body';
import { Menu } from './menu';

class Header extends Component {
  constructor (data = {
    id : '',
    classes : [],
    attributes : {},
    brand: null,
    menu: null,
    tools: null
  }) {
    super(data, 'header');
    let hasMenu = false;
    const menuModalId = `${this.id}-menu-modal`;
    const menuButtonId = `${this.id}-menu-button`;

    if ((data.menu && data.menu.navigation) || (data.tools && (data.tools.buttons || data.translate))) {
      if (!data.brand) data.brand = {};
      if (!data.brand.navbar) data.brand.navbar = {};
      data.brand.navbar.menu = { ...data.brand.navbar.menu, id: menuButtonId, modalId: menuModalId };
      hasMenu = true;
    }

    if (data.tools && data.tools.search) {
      if (data.tools.buttons && data.tools.buttons.length > 0) {
        hasMenu = true;
      }

      if (data.tools.search) {
        const searchModalId = `${data.id}-search-modal`;
        if (!data.brand) data.brand = {};
        if (!data.brand.navbar) data.brand.navbar = {};
        data.brand.navbar.search = { ...data.brand.navbar.search, modalId: searchModalId };
        data.tools.search.modalId = searchModalId;
      }
    }

    if (hasMenu) {
      if (!data.menu) data.menu = {};
      data.menu.id = menuModalId;
      data.menu.labelId = menuButtonId;
    }

    this._body = new Body(data);
    if (data.menu) this._menu = new Menu(data.menu);
  }

  get classes () {
    return [
      'fr-header',
      ... super.classes
    ];
  }

  get attributes () {
    console.log(super.attributes);
    return {
      ... super.attributes,
      'role': 'banner'
    };
  }

  get html () {
    const body = this._body ? this._body.html : '';
    const menu = this._menu ? this._menu.html : '';
    return `<header ${this.includeClasses()} ${this.includeAttributes()}>${body}${menu}</header>`;
  }
}

export { Header };
