import { Anchor } from '../../../../../core/action/_part/component/js/anchor';

class NavigationLink extends Anchor {
  constructor (data = {
    id : '',
    classes : [],
    attributes : {},
    label: 'lien de navigation',
    href : null,
    title : null,
    isCurrent: false,
    isExternal : false,
  }) {
    super(data);
    this._isCurrent = data.isCurrent === true;
  }

  get attributes () {
    const attributes = {
      ... super.attributes
    };

    if (this._isCurrent) attributes['aria-current'] = 'page';

    return attributes;
  }

  get classes () {
    const classes = [
      ...super.classes,
      'fr-nav__link'
    ];

    return classes;
  }
}

export { NavigationLink };
