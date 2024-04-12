import { NavigationList } from '../../../../navigation/_part/component/js/navigation-list';

class TranslateList extends NavigationList {
  constructor (data = {
    id : '',
    classes : [],
    attributes : {},
    items : []
  }) {
    super(data);
  }

  get MenuClass () {
    return TranslateMenu;
  }
}
