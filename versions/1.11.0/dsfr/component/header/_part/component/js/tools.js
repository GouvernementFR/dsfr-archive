import { Component } from '../../../../../core/_part/component/js/component';
import { Button } from '../../../../button/_part/component/js/button';
import { ButtonsGroup } from '../../../../button/_part/component/js/group/buttons-group';

class Tools extends Component {
  constructor (data = {
    id : '',
    classes : [],
    attributes : {},
    buttons : null,
    translate: null,
    search: null
  }) {
    super(data);
    this._buttons = data.buttons || [];
    this._translate = data.translate;
    if (data.search) this._search = new Search(data.search);
  }

  get classes () {
    return [
      'fr-header__tools',
      ... super.classes
    ];
  }

  getButtonsContent () {
    switch (this._buttons.length) {
      case 0:
        return '';

      case 1:
        return new Button(this._buttons[0]).html;

      default:
       return new ButtonsGroup({ buttons: this._buttons }).html;
    }
  }

  get toolsLink () {
    const content = this.getButtonsContent();
    if (content === '') return '';
    return `<div class="fr-header__tools-links">${content}</div>`;
  }

  get html () {
    return `<div ${this.includeClasses()} ${this.includeAttributes()}>${this.toolsLink}</div>`;
  }
}

export { Tools };
