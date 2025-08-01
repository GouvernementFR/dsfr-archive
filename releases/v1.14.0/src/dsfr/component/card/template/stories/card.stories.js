import { renderCard } from './card';
import { cardArgs, cardArgTypes, cardProps } from './card-arg-types';

const render = (args) => renderCard({ card: cardProps(args) });
const renders = (argsArray) => argsArray.map(args => render(args)).join('\n\n');

export default {
  id: 'card',
  title: 'DSFR/Component/Card',
  render: render,
  argTypes: cardArgTypes,
  args: cardArgs
};

export const CardStory = {
  args: {}
};

export const SizeSmStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      enlarge: true,
      size: 'sm',
      description: 'Description (optionnelle)'
    }
  ])
};

export const SizeMdStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      enlarge: true,
      size: 'md',
      description: 'Description (optionnelle)'
    }
  ])
};

export const SizeLgStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      enlarge: true,
      size: 'lg',
      description: 'Description (optionnelle)'
    }
  ])
};

export const VerticalStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      enlarge: true,
      description: 'Description (optionnelle)'
    }
  ])
};

export const HorizontalStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      enlarge: true,
      horizontal: true,
      hasTag: true
    }
  ])
};

export const HorizontalSmStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      enlarge: true,
      size: 'sm',
      horizontal: true,
      hasTag: true
    }
  ])
};

export const HorizontalMdStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      enlarge: true,
      size: 'md',
      horizontal: true,
      hasTag: true
    }
  ])
};

export const HorizontalLgStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      enlarge: true,
      size: 'lg',
      horizontal: true,
      hasTag: true
    }
  ])
};

export const HorizontalTierStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      enlarge: true,
      horizontal: true,
      horizontalProportion: 'tier',
      hasBadge: true
    }
  ])
};

export const HorizontalHalfStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      enlarge: true,
      horizontal: true,
      horizontalProportion: 'half',
      hasBadge: true
    }
  ])
};

export const DownloadStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      enlarge: true,
      title: 'Télécharger le document XX',
      download: true,
      detailEnd: 'Détail obligatoire (Extension - Poids - Langue)'
    }
  ])
};

export const DownloadButtonStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      enlarge: true,
      title: 'Télécharger le document XX',
      actionMarkup: 'button',
      download: true,
      description: 'Description (optionnelle)',
      detailEnd: 'Détail obligatoire (Extension - Poids - Langue)'
    }
  ])
};

export const DownloadAssessFileStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      enlarge: true,
      title: 'Télécharger le document XX',
      description: 'Les détails du document (format, poids) sont injectés en js automatiquement',
      download: true,
      href: 'img/placeholder.16x9.pdf',
      assess: true,
      detailEnd: 'PDF'
    }
  ])
};

export const DownloadAssessFileEnglishStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      enlarge: true,
      title: 'Télécharger le document XX',
      description: 'Les détails du document (format, poids, langue) sont injectés en js automatiquement et le poids est en Bytes',
      download: true,
      lang: 'en',
      href: 'img/placeholder.16x9.pdf',
      assess: 'bytes',
      detailLabel: 'PDF'
    }
  ])
};

export const ActionButtonsStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      hasButtons: true
    }
  ])
};

export const ActionLinksStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      hasLinks: true
    }
  ])
};

export const GreyCardStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      variations: 'grey'
    }
  ])
};

export const NoBorderCardStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      variations: 'no-border'
    }
  ])
};

export const NoBackgroundCardStory = {
  tags: ['autodocs', '!dev'],
  parameters: {
    docs: {
      description: {
        story: 'Fonctionne avec une classe utilitaire de background sur un parent pour propager la couleur sur le hover et le clic.<br> Exemple : `fr-background--alt-orange-terre-battue`'
      }
    }
  },
  render: () => renders([
    {
      variations: 'no-background'
    }
  ])
};

export const ShadowedCardStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      variations: 'shadow'
    }
  ])
};

export const DisabledStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      disabled: true,
      description: 'Description (optionnelle)'
    }
  ])
};
