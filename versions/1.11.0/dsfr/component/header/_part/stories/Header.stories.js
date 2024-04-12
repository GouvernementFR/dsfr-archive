import { Header } from '../component/js/header.js';
import '../../../../../dist/dsfr.css';
import { Default  as navigationDefault } from '../../../navigation/_part/stories/Navigation.stories';

const LABEL = 'Libellé du badge';

export default {
  title: 'Example/Header',
  tags: ['autodocs'],
  render: ({ ...args }) => {
    const brand = {
      link: {
        href: args.brandLinkHref,
        title: args.brandLinkTitle
      },
      logo : {
        title: args.brandLogoTitle
      }
    };

    const service = {
      title: args.brandServiceTitle,
      tagline: args.brandServiceTagline,
      isBeta: args.isBeta
    }

    if (args.hasBrandService) brand.service = service;

    const tools = {
      buttons: args.buttons || []
    };








    const data = {
      brand: brand,
      tools: tools
    };

    if (args.navigation) {
      data.menu = {
        navigation: args.navigation
      }
    }

    const header = new Header(data);
    return header.html;
  },
  argTypes: {
    brandLinkHref: {
      control: 'text',
      default: '#'
    },
    brandLinkTitle: {
      control: 'text',
      default: 'Accueil'
    },
    brandLogoTitle: {
      control: 'text',
      default: 'république<br>française'
    },
    hasBrandService: {
      control: 'boolean',
      default: false
    },
    brandServiceTitle: {
      control: 'text',
      default: 'Nom du Site / Service'
    },
    brandServiceTagline: {
      control: 'text',
      default: 'baseline - précisions sur l‘organisation'
    },
    isBeta : {
      control: 'boolean',
      default: false
    }

  },
};

export const Default = {
  args: {
    brandLinkHref: '#',
    brandLinkTitle: 'Accueil',
    brandLogoTitle: 'république<br>française',
    hasBrandService: true,
    brandServiceTitle: 'Nom du Site / Service',
    brandServiceTagline: 'baseline - précisions sur l‘organisation',
    isBeta: false,
    navigation: navigationDefault.args,
    buttons: [{ markup: 'a', href: '#', label: 'Contact', classes: ['fr-btn--team']}]
  },
};
