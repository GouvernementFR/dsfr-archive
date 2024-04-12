import { NavigationLink } from '../../../../navigation/_part/component/js/navigation-link';

class TranslateLink extends NavigationLink {
  constructor (data = {
    id : '',
    classes : [],
    attributes : {},
    label: '',
    href: '',
    target: null,
    isCurrent: false,
    name: '',
    locale: ''
  }) {
    if (!data.label) {
      data.label = `${data.locale} - ${data.name}`;
    }
    super(data);
    this._name = data.name;
    this._locale = data.locale;
  }

  get attributes () {
    const attributes = {
      ... super.attributes
    };

    if (this._locale) {
      attributes.lang = this._locale;
      attributes.hreflang = this._locale;
    }

    return attributes;
  }

  get classes () {
    const classes = [
      ...super.classes,
      'fr-translate__language'
    ];

    return classes;
  }
}

export { TranslateLink };
