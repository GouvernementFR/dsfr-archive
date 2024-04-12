import { Translate } from '../component/js/translate.js';
import '../../../../../dist/dsfr.css';
import '../../../../../dist/dsfr.module.js';

export default {
  title: 'Example/Navigation',
  tags: ['autodocs'],
  render: ({ ...args }) => {
    const translate = new Translate(args);
    return translate.html;
  }
};

export const Default = {
  args: {
    items: [
      {
        type: 'mega-menu', label: 'intitulé megamenu', collapseId: 'megamenu1', isCurrent: true, leader: {},
        categories: [
          {
            label: 'intitulé catégorie', href: '#', links: [
              { type: 'link', label: 'intitulé lien', href: '#' },
              { type: 'link', label: 'intitulé lien', href: '#' },
              { type: 'link', label: 'intitulé lien', href: '#' },
              { type: 'link', label: 'intitulé lien', href: '#' },
            ]
          },
          {
            label: 'intitulé catégorie', href: '#', isCurrent: true, links: [
              { type: 'link', label: 'intitulé lien', href: '#' },
              { type: 'link', label: 'intitulé lien', href: '#' },
              { type: 'link', label: 'intitulé lien', href: '#', isCurrent: true },
              { type: 'link', label: 'intitulé lien', href: '#' },
            ]
          },
          {
            label: 'intitulé catégorie', href: '#', links: [
              { type: 'link', label: 'intitulé lien', href: '#' },
              { type: 'link', label: 'intitulé lien', href: '#' },
              { type: 'link', label: 'intitulé lien', href: '#' },
              { type: 'link', label: 'intitulé lien', href: '#' },
            ]
          },
        ]
      },
      { type: 'menu', label: 'intitulé menu', collapseId: 'menu1', links: [
          { type: 'link', label: 'intitulé lien', href: '#' },
          { type: 'link', label: 'intitulé lien', href: '#' },
          { type: 'link', label: 'intitulé lien', href: '#' },
          { type: 'link', label: 'intitulé lien', href: '#' },
        ] },
      { type: 'menu', label: 'intitulé menu', collapseId: 'menu2', links: [
          { type: 'link', label: 'intitulé lien', href: '#' },
          { type: 'link', label: 'intitulé lien', href: '#' },
          { type: 'link', label: 'intitulé lien', href: '#' },
          { type: 'link', label: 'intitulé lien', href: '#' },
        ] },
      { type: 'link', label: 'intitulé lien', href: '#' },
      { type: 'link', label: 'intitulé lien', href: '#' },
    ]
  }
}


export const Links = {
  args: {
    items: [
      { type: 'link', label: 'intitulé lien', href: '#' },
      { type: 'link', label: 'intitulé lien', href: '#' },
      { type: 'link', label: 'intitulé lien', href: '#', isCurrent: true },
      { type: 'link', label: 'intitulé lien', href: '#' }
    ]
  }
}

export const Menus = {
  args: {
    items: [
      { type: 'menu', label: 'intitulé menu', collapseId: 'menu1', isCurrent: true, links: [
        { type: 'link', label: 'intitulé lien', href: '#' },
        { type: 'link', label: 'intitulé lien', href: '#' },
        { type: 'link', label: 'intitulé lien', href: '#', isCurrent: true },
        { type: 'link', label: 'intitulé lien', href: '#' },
        ] },
      { type: 'menu', label: 'intitulé menu', collapseId: 'menu2', links: [
          { type: 'link', label: 'intitulé lien', href: '#' },
          { type: 'link', label: 'intitulé lien', href: '#' },
          { type: 'link', label: 'intitulé lien', href: '#' },
          { type: 'link', label: 'intitulé lien', href: '#' },
        ] },
      { type: 'menu', label: 'intitulé menu', collapseId: 'menu3', links: [
          { type: 'link', label: 'intitulé lien', href: '#' },
          { type: 'link', label: 'intitulé lien', href: '#' },
          { type: 'link', label: 'intitulé lien', href: '#' },
          { type: 'link', label: 'intitulé lien', href: '#' },
        ] },
    ]
  }
}

export const MegaMenus = {
  args: {
    items: [
      {
        type: 'mega-menu', label: 'intitulé megamenu', collapseId: 'megamenu1', isCurrent: true, leader: {},
        categories: [
          {
            label: 'intitulé catégorie', href: '#', links: [
              { type: 'link', label: 'intitulé lien', href: '#' },
              { type: 'link', label: 'intitulé lien', href: '#' },
              { type: 'link', label: 'intitulé lien', href: '#' },
              { type: 'link', label: 'intitulé lien', href: '#' },
            ]
          },
          {
            label: 'intitulé catégorie', href: '#', isCurrent: true, links: [
              { type: 'link', label: 'intitulé lien', href: '#' },
              { type: 'link', label: 'intitulé lien', href: '#' },
              { type: 'link', label: 'intitulé lien', href: '#', isCurrent: true },
              { type: 'link', label: 'intitulé lien', href: '#' },
            ]
          },
          {
            label: 'intitulé catégorie', href: '#', links: [
              { type: 'link', label: 'intitulé lien', href: '#' },
              { type: 'link', label: 'intitulé lien', href: '#' },
              { type: 'link', label: 'intitulé lien', href: '#' },
              { type: 'link', label: 'intitulé lien', href: '#' },
            ]
          },
        ]
      },
      {
        type: 'mega-menu', label: 'intitulé megamenu', collapseId: 'megamenu2', leader: {},
        categories: [
          {
            label: 'intitulé catégorie', href: '#', links: [
              { type: 'link', label: 'intitulé lien', href: '#' },
              { type: 'link', label: 'intitulé lien', href: '#' },
              { type: 'link', label: 'intitulé lien', href: '#' },
              { type: 'link', label: 'intitulé lien', href: '#' },
            ]
          },
          {
            label: 'intitulé catégorie', href: '#', links: [
              { type: 'link', label: 'intitulé lien', href: '#' },
              { type: 'link', label: 'intitulé lien', href: '#' },
              { type: 'link', label: 'intitulé lien', href: '#' },
              { type: 'link', label: 'intitulé lien', href: '#' },
            ]
          },
          {
            label: 'intitulé catégorie', href: '#', links: [
              { type: 'link', label: 'intitulé lien', href: '#' },
              { type: 'link', label: 'intitulé lien', href: '#' },
              { type: 'link', label: 'intitulé lien', href: '#' },
              { type: 'link', label: 'intitulé lien', href: '#' },
            ]
          },
        ]
      }
    ]
  }
}
