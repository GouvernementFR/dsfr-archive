import { Component } from '../../../../../core/_part/component/js/component';
import { Button } from '../../../../button/_part/component/js/button';

class Navbar extends Component {
  constructor (data = {
    id : '',
    classes : [],
    attributes : {},
    menu: null,
    search: null
  }) {
    super(data);
    this._buttons = [];
    if (data.search) {
      const attributes = { ...data.search.attributes, 'data-fr-opened': 'false' };
      if (data.search.modalId) attributes['aria-controls'] = data.search.modalId;
      const search = new Button({ ...data.search, classes: ['fr-btn--search'], attributes: attributes, label: data.label || 'Rechercher'});
      this._buttons.push(search);
    }

    if (data.menu) {
      const attributes = { ...data.menu.attributes, 'data-fr-opened': 'false' };
      if (data.menu.modalId) attributes['aria-controls'] = data.menu.modalId;
      const menu = new Button({ ...data.menu, classes: ['fr-btn--menu'], attributes: attributes, label: data.label || 'Menu'});
      this._buttons.push(menu);
    }
  }

  get buttons () {
    return this._buttons;
  }

  get classes () {
    return [
      'fr-header__navbar',
      ... super.classes
    ];
  }

  get html () {
    const buttons = this._buttons.map(button => button.html).join('');
    return `<div ${this.includeClasses()} ${this.includeAttributes()}>${buttons}</div>`;
  }
}

export { Navbar };
