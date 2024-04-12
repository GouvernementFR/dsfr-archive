import { Component } from '../../../../../core/_part/component/js/component';
import { Navigation } from '../../../../navigation/_part/component/js/navigation';
import { ButtonDataClose } from '../../../../button/_part/component/js/special/button-data-close';

class Menu extends Component {
  constructor (data = {
    id : '',
    classes : [],
    attributes : {},
    labelId: '',
    navigation: null
  }) {
    super(data);
    this._labelId = data.labelId;
    if (data.navigation) this._navigation = new Navigation(data.navigation);
  }

  get attributes () {
    const attributes = {
      ... super.attributes,
      'aria-labelledby': this._labelId,
    };
    return attributes;
  }

  get classes () {
    return [
      'fr-header__menu',
      'fr-modal',
      ... super.classes
    ];
  }

  get html () {
    const navigation = this._navigation ? this._navigation.html : '';
    const close = new ButtonDataClose({ collapseId: this.id }).html
    return `<div ${this.includeClasses()} ${this.includeAttributes()}><div class="fr-container">${close}${navigation}</div></div>`;
  }
}

export { Menu };
