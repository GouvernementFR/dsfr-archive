import { Component } from '../../../../../core/_part/component/js/component';
import { Logo } from '../../../../logo/_part/component/js/logo';
import { Image } from '../../../../../core/media/_part/component/js/image';
import { Badge } from '../../../../badge/_part/component/js/badge';
import { Navbar } from './navbar';

class Brand extends Component {
  constructor (data = {
    id : 'brand',
    classes : [],
    attributes : {},
    logo: null,
    service: null,
    operator: null,
    navbar: null,
    link: { href: '#', title: 'Accueil' }
  }) {
    super(data);
    const logo = data.logo || {};
    if (!logo.id) logo.id = `${data.id}-logo`;
    this._logo = new Logo(logo);
    this._service = data.service;
    this._operator = data.operator;
    if (data.navbar) this._navbar = new Navbar(data.navbar);
    this._link = data.link;
  }

  get classes () {
    return [
      'fr-header__brand',
      'fr-enlarge-link',
      ... super.classes
    ];
  }

  get logo () {
    return this._logo;
  }

  get attributes () {
    return {
      ... super.attributes
    };
  }

  wrapLink (content, isWrapping = true) {
    if (!isWrapping) return content;
    return `<a href="${this._link.href}" title="${this._link.title}" >${content}</a>`;
  }

  get html () {
    let place = 'logo';
    if (this._service && this._service.title) place = 'service';
    else if (this._operator) place = 'operator';

    let top = '<div class="fr-header__brand-top">';

    top += `<div class="fr-header__logo">${this.wrapLink(this._logo.html, place === 'logo')}</div>`;

    let operator = '';
    if (this._operator) {
      const img = new Image(this._operator)
      operator = `<div class="fr-header__operator">${this.wrapLink(img.html, place === 'operator')}</div>`;
      top += operator;
    }

    if (this._navbar) { top += this._navbar.html; }

    top += '</div>';

    let service = '';

    if (this._service) {
      service = '<div class="fr-header__service" >';
      if (this._service.title || this._service.isBeta) {
        let serviceContent = '<p class="fr-header__service-title" >';
        if (this._service.title) serviceContent += this._service.title;
        if (this._service.isBeta) {
          const badge = new Badge({ label: 'Bêta', size: 'sm', markup: 'span', accent: 'green-emeraude' });
          serviceContent += badge.html;
        }
        serviceContent += '</p>';
        service += this.wrapLink(serviceContent, place === 'service');
      }
      if (this._service.tagline) {
        service += `<p class="fr-header__service-tagline" >${this._service.tagline}</p>`;
      }
      service += '</div>';
    }




    return `<div ${this.includeClasses()} ${this.includeAttributes()}>${top}${service}</div>`;
  }
}

export { Brand };
