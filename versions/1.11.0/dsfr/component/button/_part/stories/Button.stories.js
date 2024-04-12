import { Button } from '../component/js/button.js';
import { ButtonData } from '../component/js/button-data';
import { ButtonSizes } from '../component/js/button-sizes.js';
import { ButtonKinds } from '../component/js/button-kinds.js';
import '../../../../../dist/dsfr.css';

const DEFAULT_TEXT = 'Libellé du bouton';

export default {
  title: 'Example/Button',
  tags: ['autodocs'],
  render: (args) => {
    const data = new ButtonData(args.id, args.text, args.size, args.kind);
    const button = new Button(data);
    return button.html;
  },
  argTypes: {
    id: {
      control: 'text',
      default: 'button-1'
    },
    text: {
      control: 'text'
    },
    size: {
      control: { type: 'select' },
      options: Object.values(ButtonSizes),
      default: 'md'
    },
    kind: {
      control: {
        type: 'select'
      },
      options: Object.values(ButtonKinds),
      default: ButtonKinds.PRIMARY
    }
  },
};

export const Primary = {
  args: {
    kind: ButtonKinds.PRIMARY,
    text: DEFAULT_TEXT,
  },
};

export const Secondary = {
  args: {
    kind: ButtonKinds.SECONDARY,
    text: DEFAULT_TEXT,
  },
};

export const Large = {
  args: {
    size: ButtonSizes.LARGE,
    text: DEFAULT_TEXT,
  },
};

export const Small = {
  args: {
    size: ButtonSizes.SMALL,
    text: DEFAULT_TEXT,
  },
};
