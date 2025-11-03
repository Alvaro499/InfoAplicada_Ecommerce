
      import React from 'react';
      import ReactDOM from 'react-dom';
      import { Area } from '@evershop/evershop/components/common';
      import {HydrateFrontStore} from '@evershop/evershop/components/common';
      
import e5e935ac36ff1c4f2feb52fff39edb690 from 'file:///C:/InfoAplicada/node_modules/@evershop/evershop/dist/modules/catalog/pages/frontStore/all/SearchBox.js';
import e463b51a45f467abf9546a3751f180bbb from 'file:///C:/InfoAplicada/node_modules/@evershop/evershop/dist/modules/checkout/pages/frontStore/all/MiniCart.js';
import e502672cc6536738ccc47ab4eb99bea79 from 'file:///C:/InfoAplicada/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/all/Breadcrumb.js';
import ec09e4be12ed4e5a99943567239849867 from 'file:///C:/InfoAplicada/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/all/Footer.js';
import ea024aa57d166fb5be49685b958bb34f5 from 'file:///C:/InfoAplicada/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/all/HeadTags.js';
import e848259262e08e9397a4bd69127e9f6ce from 'file:///C:/InfoAplicada/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/all/Layout.js';
import e08c48be04337162c8a891510edd3269d from 'file:///C:/InfoAplicada/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/all/Logo.js';
import eda04bd67bdab38eabe0bc15857ab059d from 'file:///C:/InfoAplicada/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/all/Notification.js';
import eadd6ffad77648be6065f3b0ccdfe1f96 from 'file:///C:/InfoAplicada/node_modules/@evershop/evershop/dist/modules/customer/pages/frontStore/all/UserIcon.js';
import e340b6d4e70cf01b60c9eb16b3d2071b1 from 'file:///C:/InfoAplicada/node_modules/@evershop/evershop/dist/modules/customer/pages/frontStore/login/LoginForm.js';
import collection_products from 'file:///C:/InfoAplicada/node_modules/@evershop/evershop/dist/components/frontStore/widgets/CollectionProducts.js';
import text_block from 'file:///C:/InfoAplicada/node_modules/@evershop/evershop/dist/components/frontStore/widgets/TextBlock.js';
import basic_menu from 'file:///C:/InfoAplicada/node_modules/@evershop/evershop/dist/components/frontStore/widgets/BasicMenu.js';
Area.defaultProps.components = {
  'icon-wrapper': {
    e5e935ac36ff1c4f2feb52fff39edb690: {
      id: 'e5e935ac36ff1c4f2feb52fff39edb690',
      sortOrder: 5,
      component: { default: e5e935ac36ff1c4f2feb52fff39edb690 }
    },
    e463b51a45f467abf9546a3751f180bbb: {
      id: 'e463b51a45f467abf9546a3751f180bbb',
      sortOrder: 10,
      component: { default: e463b51a45f467abf9546a3751f180bbb }
    },
    eadd6ffad77648be6065f3b0ccdfe1f96: {
      id: 'eadd6ffad77648be6065f3b0ccdfe1f96',
      sortOrder: 30,
      component: { default: eadd6ffad77648be6065f3b0ccdfe1f96 }
    }
  },
  content: {
    e502672cc6536738ccc47ab4eb99bea79: {
      id: 'e502672cc6536738ccc47ab4eb99bea79',
      sortOrder: 0,
      component: { default: e502672cc6536738ccc47ab4eb99bea79 }
    },
    e340b6d4e70cf01b60c9eb16b3d2071b1: {
      id: 'e340b6d4e70cf01b60c9eb16b3d2071b1',
      sortOrder: 10,
      component: { default: e340b6d4e70cf01b60c9eb16b3d2071b1 }
    }
  },
  footer: {
    ec09e4be12ed4e5a99943567239849867: {
      id: 'ec09e4be12ed4e5a99943567239849867',
      sortOrder: 10,
      component: { default: ec09e4be12ed4e5a99943567239849867 }
    }
  },
  head: {
    ea024aa57d166fb5be49685b958bb34f5: {
      id: 'ea024aa57d166fb5be49685b958bb34f5',
      sortOrder: 5,
      component: { default: ea024aa57d166fb5be49685b958bb34f5 }
    }
  },
  body: {
    e848259262e08e9397a4bd69127e9f6ce: {
      id: 'e848259262e08e9397a4bd69127e9f6ce',
      sortOrder: 1,
      component: { default: e848259262e08e9397a4bd69127e9f6ce }
    },
    eda04bd67bdab38eabe0bc15857ab059d: {
      id: 'eda04bd67bdab38eabe0bc15857ab059d',
      sortOrder: 10,
      component: { default: eda04bd67bdab38eabe0bc15857ab059d }
    }
  },
  header: {
    e08c48be04337162c8a891510edd3269d: {
      id: 'e08c48be04337162c8a891510edd3269d',
      sortOrder: 10,
      component: { default: e08c48be04337162c8a891510edd3269d }
    }
  },
  '*': {
    collection_products: {
      id: 'collection_products',
      sortOrder: 0,
      component: { default: collection_products }
    },
    text_block: {
      id: 'text_block',
      sortOrder: 0,
      component: { default: text_block }
    },
    basic_menu: {
      id: 'basic_menu',
      sortOrder: 0,
      component: { default: basic_menu }
    }
  }
} 
ReactDOM.hydrate(
        React.createElement(HydrateFrontStore, null),
        document.getElementById('app')
      );