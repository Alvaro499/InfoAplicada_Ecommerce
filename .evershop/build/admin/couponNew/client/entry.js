
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
import ef40dabb9658ebf625399629f7c1bb488 from 'file:///C:/InfoAplicada/node_modules/@evershop/evershop/dist/modules/customer/pages/admin/all/CustomerMenuGroup.js';
import ebaab520c63fa8d609a81271f017667cf from 'file:///C:/InfoAplicada/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/all/OmsMenuGroup.js';
import e1be2d8806832eaae2c8bfcb9d6806cdd from 'file:///C:/InfoAplicada/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/all/CouponMenuGroup.js';
import e178f5e96a65ef764da57c0c658f55b40 from 'file:///C:/InfoAplicada/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/all/NewCouponQuickLink.js';
import efc592854c61d9f4d687505cc5680db9d from 'file:///C:/InfoAplicada/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/couponEdit+couponNew/CustomerCondition.js';
import e0b1554ca90bb0302d8cea08db8907654 from 'file:///C:/InfoAplicada/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/couponEdit+couponNew/DiscountType.js';
import e78f75c9607ac9a41b0077b593de1427c from 'file:///C:/InfoAplicada/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/couponEdit+couponNew/FormContent.js';
import e3a2c023fb672924e2c6e3388bfc73b32 from 'file:///C:/InfoAplicada/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/couponEdit+couponNew/General.js';
import e21fae279b3fc1ecb79b21c64b9451951 from 'file:///C:/InfoAplicada/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/couponEdit+couponNew/OrderCondition.js';
import ea86839b332d27469fbf80d216cfd751b from 'file:///C:/InfoAplicada/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/couponEdit+couponNew/PageHeading.js';
import eee79d6320670afc4d1b1112c482e8433 from 'file:///C:/InfoAplicada/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/couponNew/CouponNewForm.js';
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
  couponEditRight: {
    efc592854c61d9f4d687505cc5680db9d: {
      id: 'efc592854c61d9f4d687505cc5680db9d',
      sortOrder: 10,
      component: { default: efc592854c61d9f4d687505cc5680db9d }
    }
  },
  couponEditDiscountType: {
    e0b1554ca90bb0302d8cea08db8907654: {
      id: 'e0b1554ca90bb0302d8cea08db8907654',
      sortOrder: 30,
      component: { default: e0b1554ca90bb0302d8cea08db8907654 }
    }
  },
  couponForm: {
    e78f75c9607ac9a41b0077b593de1427c: {
      id: 'e78f75c9607ac9a41b0077b593de1427c',
      sortOrder: 10,
      component: { default: e78f75c9607ac9a41b0077b593de1427c }
    }
  },
  couponEditGeneral: {
    e3a2c023fb672924e2c6e3388bfc73b32: {
      id: 'e3a2c023fb672924e2c6e3388bfc73b32',
      sortOrder: 10,
      component: { default: e3a2c023fb672924e2c6e3388bfc73b32 }
    }
  },
  couponEditLeft: {
    e21fae279b3fc1ecb79b21c64b9451951: {
      id: 'e21fae279b3fc1ecb79b21c64b9451951',
      sortOrder: 10,
      component: { default: e21fae279b3fc1ecb79b21c64b9451951 }
    }
  },
  content: {
    ea86839b332d27469fbf80d216cfd751b: {
      id: 'ea86839b332d27469fbf80d216cfd751b',
      sortOrder: 5,
      component: { default: ea86839b332d27469fbf80d216cfd751b }
    },
    eee79d6320670afc4d1b1112c482e8433: {
      id: 'eee79d6320670afc4d1b1112c482e8433',
      sortOrder: 10,
      component: { default: eee79d6320670afc4d1b1112c482e8433 }
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