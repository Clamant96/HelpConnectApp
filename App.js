import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Home from './src/components/layout';
import CustomDrawer from './src/components/CustomDrawer/index';

import Layouts from './src/components/pages/pageLayouts/layouts/index';
import Sobre from './src/components/pages/pageSobre/sobre/index';
import Contatos from './src/components/pages/pagesContato/Contato/index';

const Routes = createAppContainer(
  createDrawerNavigator({
    Home,
    Layouts,
    Sobre,
    Contatos,

  }, {
    initialRouteName: 'Home',
    contentComponent: CustomDrawer
  })
);

export default Routes;
