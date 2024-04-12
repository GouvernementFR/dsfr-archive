import { Component } from '../../../../../../core/_part/component/js/component';
import { Hint } from '../hint/hint';
import { LabelData } from './label-data';

class Label extends Component {
  constructor (data = new LabelData('label')) {
    super(data);
  }

  get hint () {
    if (!this.data.hint) return '';

    if (Array.isArray(this.data.hint)) return this.data.hint.map(hintData => new Hint(hintData).html).join('');

    return new Hint(this.data.hint).html;
  }

  get html () {
    return `<label ${this.includeClasses()} ${this.includeAttributes()}>${this.data.text}${this.hint}</label>`;
  }
}

export { Label };
