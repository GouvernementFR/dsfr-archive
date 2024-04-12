import { Component } from '../../../../../core/_part/component/js/component';
import { Brand } from './brand';
import { Tools } from './tools';

class Body extends Component {
  constructor (data = {
    id : '',
    classes : [],
    attributes : {},
    brand: null,
    tools: null
  }) {
    super(data);
    this._brand = new Brand(data.brand);
    if (data.tools) this._tools = new Tools(data.tools);
  }

  get classes () {
    return [
      'fr-header__body',
      ... super.classes
    ];
  }

  get html () {
    const tools = this._tools ? this._tools.html : '';
    return `<div ${this.includeClasses()} ${this.includeAttributes()}><div class="fr-container"><div class="fr-header__body-row">${this._brand.html}${tools}</div></div></div>`;
  }
}

export { Body };
