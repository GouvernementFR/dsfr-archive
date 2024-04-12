import { Search } from '../component/js/search.js';
import '../../../../../dist/dsfr.css';
import { SearchSizes } from '../component/js/search-sizes';
import { SearchData } from '../component/js/search-data';

const DEFAULT_TEXT = 'Rechercher';

export default {
  title: 'Example/Search',
  tags: ['autodocs'],
  render: ({ ...args }) => {
    const data = new SearchData(args.id, args.text, args.size, args.placeholder, args.classes, args.attributes);
    const search = new Search(data);
    return search.html;
  },
  argTypes: {
    id: {
      control: 'text'
    },
    text: {
      control: 'text'
    },
    placeholder: {
      control: 'text'
    },
    size: {
      control: { type: 'select' },
      options: Object.values(SearchSizes),
      default: SearchSizes.MEDIUM
    }
  },
};

export const Medium = {
  args: {
    id: 'search',
    text: DEFAULT_TEXT,
    placeholder: DEFAULT_TEXT,
    size: SearchSizes.MEDIUM,
  },
};

export const Large = {
  args: {
    id: 'search-lg',
    text: DEFAULT_TEXT,
    placeholder: DEFAULT_TEXT,
    size: SearchSizes.LARGE,
  },
};
