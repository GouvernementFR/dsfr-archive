import { Component } from '../../../../../core/_part/component/js/component';
import { BadgeKinds } from './badge-kinds';
import { BadgeSizes } from './badge-sizes';
import { BadgeData } from './badge-data';

class Badge extends Component {
  constructor (data = new BadgeData('badge', 'Intitulé Badge')) {
    super(data);
  }

  get html () {
    const content = this.data.hasEllipsis ? `<span class="fr-badge__ellipsis">${this.data.text}</span>` : this.data.text;
    return `<${this.data.tagName} ${this.includeClasses()} ${this.includeAttributes()}>${content}</${this.data.tagName}>`;
  }

}

export { Badge };
