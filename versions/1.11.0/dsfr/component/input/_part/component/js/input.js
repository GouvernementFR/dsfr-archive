import { Component } from '../../../../../core/_part/component/js/component';
import { Label } from '../../../../form/_part/component/js/label/label';
import InputData from './input-data';

class Input extends Component {
  constructor (data = new InputData('input')) {
    super(data);
  }

  get label () {
    if (!this.data.label) return '';

    return new Label(this.data.label).html;
  }

  get html () {
    return `${this.label}<input ${this.includeClasses()} ${this.includeAttributes()} />`;
  }
}

export { Input };
