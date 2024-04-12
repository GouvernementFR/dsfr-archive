import { NavigationMenu } from '../../../../navigation/_part/component/js/navigation-menu';

class TranslateMenu extends NavigationMenu {
  constructor (data = {
    id : '',
    classes : [],
    attributes : {},
    items : []
  }) {
    super(data);
    this.id = data.id;
    this.classes = data.classes;
    this.attributes = data.attributes;
    this.items = data.items;
  }

  get LinkClass () {
    return TranslateLink;
  }



}

export { TranslateMenu };
