import { Component } from '../../../../../core/_part/component/js/component';
import { NavigationButton } from './navigation-button';
import { NavigationLink } from './navigation-link';

class NavigationMenu extends Component {
  constructor (data = { id: '', classes: [], attributes: {}, button: {}, isCurrent: false, links: [] }) {
    super(data);
    this._button = new NavigationButton({...data.button, collapseId: data.collapseId, label: data.label, isCurrent: data.isCurrent});
    this._collapseId = data.collapseId;
    this._links = data.links;
  }

  get LinkClass () {
    return NavigationLink;
  }

  get html () {
    const links = this._links.map(link => new this.LinkClass(link));
    const items = links.map(link => `<li>${link.html}</li>`);

    return `${this._button.html}<div id="${this._collapseId}" class="fr-collapse fr-menu" ><ul class="fr-menu__list">${items.join('')}</ul></div>`;
  }
}

export { NavigationMenu };
