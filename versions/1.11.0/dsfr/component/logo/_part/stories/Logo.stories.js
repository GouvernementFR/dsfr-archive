import { Logo } from '../component/js/logo.js';
import '../../../../../dist/dsfr.css';
import { LogoData } from '../component/js/logo-data';

const DEFAULT_TEXT = 'République<br>Française';

export default {
  title: 'Example/Logo',
  tags: ['autodocs'],
  render: ({ ...args }) => {
    const data = new LogoData(args.id, args.text, args.size, args.classes, args.attributes);
    const logo = new Logo(data);
    return logo.html;
  },
  argTypes: {
    text: {
      control: 'text'
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      default: 'md'
    }
  },
};

export const Large = {
  args: {
    size: 'lg',
    text: DEFAULT_TEXT,
  },
};

export const Small = {
  args: {
    size: 'sm',
    text: DEFAULT_TEXT,
  },
};
