import { Component } from '../../../../../core/_part/component/js/component';
import { ButtonKinds } from './button-kinds';
import { ButtonSizes } from './button-sizes';
import { IconPlaces } from '../../../../../core/icon/_part/component/js/icon-places';
import { ButtonData } from './button-data';

class Button extends Component {
  constructor(data = new ButtonData('button', 'Intitulé Bouton')) {
    super(data);
  }

  get html () {
    return `<${this.data.tagName} ${this.includeClasses()} ${this.includeAttributes()}>${this.data.text}</${this.data.tagName}>`;
  }
}

export { Button };
