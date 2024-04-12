import { Component } from '../../../../../core/_part/component/js/component';
import { NavigationButton } from './navigation-button';
import { NavigationLink } from './navigation-link';
import { ButtonDataClose } from '../../../../button/_part/component/js/special/button-data-close';

class NavigationMegaMenu extends Component {
  constructor (data = { id: '', classes: [], attributes: {}, button: {}, isCurrent: false, leader: null, categories: [] }) {
  super(data);
  this._button = new NavigationButton({...data.button, collapseId: data.collapseId, label: data.label, isCurrent: data.isCurrent});
  this._collapseId = data.collapseId;
  this._leader = data.leader;
  this._categories = data.categories;
}

  get html () {
    const categories = this._categories.map(category => {
      let content = '<div class="fr-col-12 fr-col-lg-3"><h5 class="fr-mega-menu__category">';
      const link = new NavigationLink(category);
      content += link.html;
      content += '</h5>';

      const links = category.links.map(link => new NavigationLink(link));
      const items = links.map(link => `<li>${link.html}</li>`);
      content += `<ul class="fr-mega-menu__list">${items.join('')}</ul></div>`;
      return content;
    })

    const close = new ButtonDataClose({ collapseId: this._collapseId }).html;

    let leader = '';

    return `${this._button.html}<div id="${this._collapseId}" class="fr-collapse fr-mega-menu" ><div class="fr-container fr-container--fluid fr-container-lg">
    <div class="fr-grid-row fr-grid-row-lg--gutters">
      <div class="fr-col-12 fr-mb-n3v">${close}</div>${leader}${categories.join('')}</div></div></div>`;
  }
}

export { NavigationMegaMenu };
