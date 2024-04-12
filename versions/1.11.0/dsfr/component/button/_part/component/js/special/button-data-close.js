import { ButtonData } from '../button-data';

class ButtonDataClose extends ButtonData {
  constructor (id, label = 'Fermer', collapseId = null, title = null, classes = [], attributes = {}) {
    if (!label) label = 'Fermer';
    super(id, label, null, null, null, false, title, 'button', null, classes, attributes);
    this._collapseId = collapseId;
  }

  get attributes () {
    const attributes = {
      ... super.attributes
    };

    if (this._collapseId) attributes['aria-controls'] = this._collapseId;

    return attributes;
  }

  get classes () {
    const classes = [
      'fr-btn--close',
      ... super.classes
    ];

    return classes;
  }
}

export { ButtonDataClose };
