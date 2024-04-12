import { Component } from '../../../../_part/component/js/component';
import { ImageData } from './image-data';

class Image extends Component {
  constructor (data = new ImageData(''  , '')) {
    super(data);
  }

  get html () {
    return `<img ${this.includeClasses()} ${this.includeAttributes()} src="${this._src}" alt="${this._alt}" />`;
  }

}

export { Image };
