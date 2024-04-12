import { Component } from '../../../../../core/_part/component/js/component';
import { SearchSizes } from './search-sizes';
import { Input } from '../../../../input/_part/component/js/input';
import { Button } from '../../../../button/_part/component/js/button';
import { SearchData } from './search-data';

class Search extends Component {
  constructor (data = new SearchData('search')) {
    super(data);
  }

  get input () {
    return new Input(this.data.input).html;
  }

  get button () {
    return new Button(this.data.button).html;
  }

  get html () {
    return `
      <div ${this.includeClasses()} ${this.includeAttributes()}>
        ${this.input}
        ${this.button}
      </div>
    `;
  }
}

export { Search };
