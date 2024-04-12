import { Component } from '../../../../../core/_part/component/js/component';

class Logo extends Component {
  constructor (data = new LogoData('logo')) {
    super(data);
  }

  get html () {
    return `<p ${this.includeClasses()} ${this.includeAttributes()}>${this.data.text}</p>`;
  }
}

export { Logo };
