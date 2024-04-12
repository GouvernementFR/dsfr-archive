import { Badge } from '../component/js/badge.js';
import '../../../../../dist/dsfr.css';
import { BadgeSizes } from '../component/js/badge-sizes';
import { BadgeKinds } from '../component/js/badge-kinds';
import { BadgeData } from '../component/js/badge-data';

const DEFAULT_TEXT = 'Libellé du badge';

export default {
  title: 'Example/Badge',
  tags: ['autodocs'],
  render: ({ ...args }) => {
    const data = new BadgeData(args.id, args.text, args.kind, args.size);
    const badge = new Badge(data);
    return badge.html;
  },
  argTypes: {
    text: {
      control: 'text'
    },
    size: {
      control: { type: 'select' },
      options: Object.values(BadgeSizes),
      default: 'md'
    },
    kind: {
      control: {
        type: 'select',
        labels: BadgeKinds
      },
      options: Object.values(BadgeKinds),
      default: 1
    }
  },
};

export const Small = {
  args: {
    size: 'sm',
    text: DEFAULT_TEXT,
  },
};
