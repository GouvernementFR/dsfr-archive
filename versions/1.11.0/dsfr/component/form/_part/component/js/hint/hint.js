import { Component } from '../../../../../../core/_part/component/js/component';
import { HintData } from './hint-data';

class Hint extends Component {
  constructor (data = new HintData('hint')) {
    super(data);
  }

  get html () {
    return `<${this.data.tagName} ${this.includeClasses()} ${this.includeAttributes()}>${this.data.text}</${this.data.tagName}>`;
  }
}

export { Hint };
