import { Component } from '../../../../../../core/_part/component/js/component';
import { Button } from '../button';
import { ButtonsGroupData } from './buttons-group-data';
class ButtonsGroup extends Component {
  constructor (data = new ButtonsGroupData('buttons-group')) {
    super(data);
  }

  get html () {
    const buttons = this.data.buttons.map(data => new Button(data).html).join('');

    return `<div ${this.includeClasses()} ${this.includeAttributes()}>${buttons}</div>`;
  }
}

export { ButtonsGroup };
