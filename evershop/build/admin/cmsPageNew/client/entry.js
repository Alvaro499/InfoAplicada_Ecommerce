
      import React from 'react';
      import ReactDOM from 'react-dom';
      import { Area } from '@evershop/evershop/components/common';
      import {HydrateAdmin} from '@evershop/evershop/components/common';
      
import e50d1553425274af38eee62951dea8abb from 'file:///C:/InfoAplicada/node_modules/@evershop/evershop/dist/modules/auth/pages/admin/all/AdminUser.js';
import e5977210e03fc39be7486a2a04a43ac45 from 'file:///C:/InfoAplicada/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/all/CatalogMenuGroup.js';
import e5434d977f2d1f57a39a8ea6063b9a938 from 'file:///C:/InfoAplicada/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/all/NewProductQuickLink.js';
import e3c273267a463127e60484fb159c6da65 from 'file:///C:/InfoAplicada/node_modules/@evershop/evershop/dist/modules/checkout/pages/admin/all/ShippingSettingMenu.js';
import e267686d14fd0087bea7f48fc3cb80f6f from 'file:///C:/InfoAplicada/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/CmsMenuGroup.js';
import e3c2ad018c37645d84c7d78953b142da0 from 'file:///C:/InfoAplicada/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/CopyRight.js';
import e731b4cc4bde0b28bcdbee234985dd81f from 'file:///C:/InfoAplicada/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Layout.js';
import e5a5bbef2ef655b5618fe773141433ed7 from 'file:///C:/InfoAplicada/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Logo.js';
import ef1ae3c6df090f31fd30a5b6b76982ff8 from 'file:///C:/InfoAplicada/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Meta.js';
import e7c4849838d3b106770fe6c3eedae9ff2 from 'file:///C:/InfoAplicada/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Navigation.js';
import ebfd714f2f3f49c42614f46ca2c144bf6 from 'file:///C:/InfoAplicada/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Notification.js';
import e5915b8b58086e1e586f4c6555f6840bf from 'file:///C:/InfoAplicada/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/QuickLinks.js';
import e522ed9df027e5440928c12e069dafd16 from 'file:///C:/InfoAplicada/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/SearchBox.js';
import e2791a48740c66c2065c5882d58aec3e5 from 'file:///C:/InfoAplicada/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Version.js';
import edd5a438a1c88faae5cce24b7bceda2cc from 'file:///C:/InfoAplicada/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/cmsPageEdit+cmsPageNew/FormContent.js';
import e24c9d08a4dc2f9623aecf4134f81863f from 'file:///C:/InfoAplicada/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/cmsPageEdit+cmsPageNew/General.js';
import e70203da862ac69cf4a8bb8c0eb35cba8 from 'file:///C:/InfoAplicada/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/cmsPageEdit+cmsPageNew/PageHeading.js';
import e16e6cfd2bb9483f6756d5045eefa7489 from 'file:///C:/InfoAplicada/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/cmsPageEdit+cmsPageNew/Seo.js';
import e56645bdd5cc8b09c101c5a2b1a0f7022 from 'file:///C:/InfoAplicada/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/cmsPageEdit+cmsPageNew/Status.js';
import e1b7bcba8782787b6a20276210d5a78c5 from 'file:///C:/InfoAplicada/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/cmsPageNew/PageNewForm.js';
import ef40dabb9658ebf625399629f7c1bb488 from 'file:///C:/InfoAplicada/node_modules/@evershop/evershop/dist/modules/customer/pages/admin/all/CustomerMenuGroup.js';
import ebaab520c63fa8d609a81271f017667cf from 'file:///C:/InfoAplicada/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/all/OmsMenuGroup.js';
import e1be2d8806832eaae2c8bfcb9d6806cdd from 'file:///C:/InfoAplicada/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/all/CouponMenuGroup.js';
import e178f5e96a65ef764da57c0c658f55b40 from 'file:///C:/InfoAplicada/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/all/NewCouponQuickLink.js';
import ee98354e2571d5f4572ea3de434bbae01 from 'file:///C:/InfoAplicada/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/PaymentSettingMenu.js';
import e3dd7bd091cac67e07ca7cb53fdefe005 from 'file:///C:/InfoAplicada/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/SettingMenuGroup.js';
import e9cb1fea2d6a2691879e756e121e3c24e from 'file:///C:/InfoAplicada/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/StoreSettingMenu.js';
import e956010d864b2e41b9aeb87575cba81e8 from 'file:///C:/InfoAplicada/node_modules/@evershop/evershop/dist/modules/tax/pages/admin/all/TaxSettingMenu.js';
import collection_products from 'file:///C:/InfoAplicada/node_modules/@evershop/evershop/dist/components/admin/widgets/CollectionProductsSetting.js';
import text_block from 'file:///C:/InfoAplicada/node_modules/@evershop/evershop/dist/components/admin/widgets/TextBlockSetting.js';
import basic_menu from 'file:///C:/InfoAplicada/node_modules/@evershop/evershop/dist/components/admin/widgets/BasicMenuSetting.js';
Area.defaultProps.components = {
  header: {
    e50d1553425274af38eee62951dea8abb: {
      id: 'e50d1553425274af38eee62951dea8abb',
      sortOrder: 50,
      component: { default: e50d1553425274af38eee62951dea8abb }
    },
    e5a5bbef2ef655b5618fe773141433ed7: {
      id: 'e5a5bbef2ef655b5618fe773141433ed7',
      sortOrder: 10,
      component: { default: e5a5bbef2ef655b5618fe773141433ed7 }
    },
    e522ed9df027e5440928c12e069dafd16: {
      id: 'e522ed9df027e5440928c12e069dafd16',
      sortOrder: 20,
      component: { default: e522ed9df027e5440928c12e069dafd16 }
    }
  },
  adminMenu: {
    e5977210e03fc39be7486a2a04a43ac45: {
      id: 'e5977210e03fc39be7486a2a04a43ac45',
      sortOrder: 20,
      component: { default: e5977210e03fc39be7486a2a04a43ac45 }
    },
    e267686d14fd0087bea7f48fc3cb80f6f: {
      id: 'e267686d14fd0087bea7f48fc3cb80f6f',
      sortOrder: 60,
      component: { default: e267686d14fd0087bea7f48fc3cb80f6f }
    },
    e5915b8b58086e1e586f4c6555f6840bf: {
      id: 'e5915b8b58086e1e586f4c6555f6840bf',
      sortOrder: 10,
      component: { default: e5915b8b58086e1e586f4c6555f6840bf }
    },
    ef40dabb9658ebf625399629f7c1bb488: {
      id: 'ef40dabb9658ebf625399629f7c1bb488',
      sortOrder: 40,
      component: { default: ef40dabb9658ebf625399629f7c1bb488 }
    },
    ebaab520c63fa8d609a81271f017667cf: {
      id: 'ebaab520c63fa8d609a81271f017667cf',
      sortOrder: 30,
      component: { default: ebaab520c63fa8d609a81271f017667cf }
    },
    e1be2d8806832eaae2c8bfcb9d6806cdd: {
      id: 'e1be2d8806832eaae2c8bfcb9d6806cdd',
      sortOrder: 50,
      component: { default: e1be2d8806832eaae2c8bfcb9d6806cdd }
    },
    e3dd7bd091cac67e07ca7cb53fdefe005: {
      id: 'e3dd7bd091cac67e07ca7cb53fdefe005',
      sortOrder: 500,
      component: { default: e3dd7bd091cac67e07ca7cb53fdefe005 }
    }
  },
  quickLinks: {
    e5434d977f2d1f57a39a8ea6063b9a938: {
      id: 'e5434d977f2d1f57a39a8ea6063b9a938',
      sortOrder: 20,
      component: { default: e5434d977f2d1f57a39a8ea6063b9a938 }
    },
    e178f5e96a65ef764da57c0c658f55b40: {
      id: 'e178f5e96a65ef764da57c0c658f55b40',
      sortOrder: 30,
      component: { default: e178f5e96a65ef764da57c0c658f55b40 }
    }
  },
  settingPageMenu: {
    e3c273267a463127e60484fb159c6da65: {
      id: 'e3c273267a463127e60484fb159c6da65',
      sortOrder: 15,
      component: { default: e3c273267a463127e60484fb159c6da65 }
    },
    ee98354e2571d5f4572ea3de434bbae01: {
      id: 'ee98354e2571d5f4572ea3de434bbae01',
      sortOrder: 10,
      component: { default: ee98354e2571d5f4572ea3de434bbae01 }
    },
    e9cb1fea2d6a2691879e756e121e3c24e: {
      id: 'e9cb1fea2d6a2691879e756e121e3c24e',
      sortOrder: 5,
      component: { default: e9cb1fea2d6a2691879e756e121e3c24e }
    },
    e956010d864b2e41b9aeb87575cba81e8: {
      id: 'e956010d864b2e41b9aeb87575cba81e8',
      sortOrder: 20,
      component: { default: e956010d864b2e41b9aeb87575cba81e8 }
    }
  },
  footerLeft: {
    e3c2ad018c37645d84c7d78953b142da0: {
      id: 'e3c2ad018c37645d84c7d78953b142da0',
      sortOrder: 10,
      component: { default: e3c2ad018c37645d84c7d78953b142da0 }
    },
    e2791a48740c66c2065c5882d58aec3e5: {
      id: 'e2791a48740c66c2065c5882d58aec3e5',
      sortOrder: 20,
      component: { default: e2791a48740c66c2065c5882d58aec3e5 }
    }
  },
  body: {
    e731b4cc4bde0b28bcdbee234985dd81f: {
      id: 'e731b4cc4bde0b28bcdbee234985dd81f',
      sortOrder: 10,
      component: { default: e731b4cc4bde0b28bcdbee234985dd81f }
    },
    ebfd714f2f3f49c42614f46ca2c144bf6: {
      id: 'ebfd714f2f3f49c42614f46ca2c144bf6',
      sortOrder: 10,
      component: { default: ebfd714f2f3f49c42614f46ca2c144bf6 }
    }
  },
  head: {
    ef1ae3c6df090f31fd30a5b6b76982ff8: {
      id: 'ef1ae3c6df090f31fd30a5b6b76982ff8',
      sortOrder: 5,
      component: { default: ef1ae3c6df090f31fd30a5b6b76982ff8 }
    }
  },
  adminNavigation: {
    e7c4849838d3b106770fe6c3eedae9ff2: {
      id: 'e7c4849838d3b106770fe6c3eedae9ff2',
      sortOrder: 10,
      component: { default: e7c4849838d3b106770fe6c3eedae9ff2 }
    }
  },
  cmsPageForm: {
    edd5a438a1c88faae5cce24b7bceda2cc: {
      id: 'edd5a438a1c88faae5cce24b7bceda2cc',
      sortOrder: 10,
      component: { default: edd5a438a1c88faae5cce24b7bceda2cc }
    }
  },
  wideScreen: {
    e24c9d08a4dc2f9623aecf4134f81863f: {
      id: 'e24c9d08a4dc2f9623aecf4134f81863f',
      sortOrder: 10,
      component: { default: e24c9d08a4dc2f9623aecf4134f81863f }
    },
    e16e6cfd2bb9483f6756d5045eefa7489: {
      id: 'e16e6cfd2bb9483f6756d5045eefa7489',
      sortOrder: 30,
      component: { default: e16e6cfd2bb9483f6756d5045eefa7489 }
    }
  },
  content: {
    e70203da862ac69cf4a8bb8c0eb35cba8: {
      id: 'e70203da862ac69cf4a8bb8c0eb35cba8',
      sortOrder: 5,
      component: { default: e70203da862ac69cf4a8bb8c0eb35cba8 }
    },
    e1b7bcba8782787b6a20276210d5a78c5: {
      id: 'e1b7bcba8782787b6a20276210d5a78c5',
      sortOrder: 10,
      component: { default: e1b7bcba8782787b6a20276210d5a78c5 }
    }
  },
  pageEditGeneral: {
    e56645bdd5cc8b09c101c5a2b1a0f7022: {
      id: 'e56645bdd5cc8b09c101c5a2b1a0f7022',
      sortOrder: 15,
      component: { default: e56645bdd5cc8b09c101c5a2b1a0f7022 }
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
        React.createElement(HydrateAdmin, null),
        document.getElementById('app')
      );