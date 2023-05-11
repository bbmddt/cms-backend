import { Section } from '../skeleton.interface';

export const editSkeleton: Section[] = [
  {
    title: {
      en: 'Brand Information',
      zh: '品牌資料',
    },
    path: 'admin/brand/edit',
    elements: [
      {
        modal: 'EditModal',
        components: [
          {
            key: 'status',
            type: 'CustomSwitch',
            label: {
              en: 'Status',
              zh: '狀態',
            },
            grid: 1,
          },
          {
            key: 'lineup',
            type: 'CustomSwitch',
            label: {
              en: 'lineup',
              zh: '排隊',
            },
            grid: 1,
          },
          {
            key: 'booking',
            type: 'CustomSwitch',
            label: {
              en: 'booking',
              zh: '訂位',
            },
            grid: 1,
          },
          {
            key: 'order',
            type: 'CustomSwitch',
            label: {
              en: 'order',
              zh: '點餐',
            },
            grid: 1,
          },
          {
            key: 'brandName',
            type: 'CustomInput',
            label: {
              en: 'brandName',
              zh: '品牌名稱',
            },
            grid: 12,
          },
          {
            key: 'brandCode',
            type: 'CustomInput',
            label: {
              en: 'brandCode',
              zh: '品牌編號',
            },
            grid: 12,
          },
          {
            key: 'tagKeyword',
            type: 'CustomTagKey',
            label: {
              en: 'tagKeyword',
              zh: '關鍵字',
            },
            grid: 12,
          },
          {
            key: 'gallery',
            type: 'CustomImages',
            label: {
              en: 'Logo Display',
              zh: '品牌Logo',
            },
            grid: 12,
          },
          {
            key: 'productName',
            type: 'CustomSelector',
            label: {
              en: 'productName',
              zh: '菜式',
            },
            grid: 12,
          },
          {
            key: 'productWebsite',
            type: 'CustomInput',
            label: {
              en: 'productWebsite',
              zh: '品牌網站',
            },
            grid: 12,
          },
          {
            key: 'lineupEndpoint',
            type: 'CustomInput',
            label: {
              en: 'lineupEndpoint',
              zh: '排隊Endpoint',
            },
            grid: 12,
          },
          {
            key: 'orderEndpoint',
            type: 'CustomInput',
            label: {
              en: 'orderEndpoint',
              zh: '點餐Endpoint',
            },
            grid: 12,
          },
          {
            key: 'remarks',
            type: 'CustomInput',
            label: {
              en: 'remarks',
              zh: '備注',
            },
            grid: 12,
          },
          {
            key: 'startdate',
            type: 'CustomDatepicker',
            label: {
              en: 'start date',
              zh: '由',
            },
            grid: 6,
          },
          {
            key: 'enddate',
            type: 'CustomDatepicker',
            label: {
              en: 'end date',
              zh: '至',
            },
            grid: 6,
          },
        ],
        buttons: [
          {
            key: 'save',
            buttonType: 'submit',
            label: {
              en: 'save',
              zh: '儲存',
            },
          },
        ],
      },
    ],
  },
  {
    title: {
      en: 'Branch Information',
      zh: '分店資料',
    },
    path: 'admin/branch/edit',
    elements: [
      {
        modal: 'EditModal',
        components: [
          {
            key: 'status',
            type: 'CustomSwitch',
            label: {
              en: 'Status',
              zh: '狀態',
            },
            grid: 2,
          },
          {
            key: 'lineup',
            type: 'CustomSwitch',
            label: {
              en: 'lineup',
              zh: '排隊',
            },
            grid: 2,
          },
          {
            key: 'booking',
            type: 'CustomSwitch',
            label: {
              en: 'booking',
              zh: '訂位',
            },
            grid: 2,
          },
          {
            key: 'order',
            type: 'CustomSwitch',
            label: {
              en: 'order',
              zh: '點餐',
            },
            grid: 2,
          },
          {
            key: 'branchName',
            type: 'CustomInput',
            label: {
              en: 'Branch Name',
              zh: '名稱',
            },
            grid: 12,
          },
          {
            key: 'branchCode',
            type: 'CustomInput',
            label: {
              en: 'branchCode',
              zh: '分店編號',
            },
            grid: 6,
          },
          {
            key: 'lineupID',
            type: 'CustomInput',
            label: {
              en: 'LineUp ID',
              zh: '排隊訂座ID',
            },
            grid: 6,
          },
          {
            key: 'belongBranch',
            type: 'CustomSelector',
            label: {
              en: 'Belong Branch',
              zh: '所屬品牌',
            },
            grid: 12,
          },
          {
            key: 'keyword',
            type: 'CustomTagKey',
            label: {
              en: 'Keyword',
              zh: '關鍵字',
            },
            grid: 3,
          },
          {
            key: 'area',
            type: 'CustomInput',
            label: {
              en: 'Area',
              zh: '區域',
            },
            grid: 12,
          },
          {
            key: 'address',
            type: 'CustomInput',
            label: {
              en: 'address',
              zh: '地址',
            },
            grid: 12,
          },
          {
            key: 'mobile',
            type: 'CustomInput',
            label: {
              en: 'mobile',
              zh: '電話',
            },
            grid: 12,
          },
          {
            key: 'businesshours',
            type: 'CustomInput',
            label: {
              en: 'Business Hours',
              zh: '營業時間',
            },
            grid: 12,
          },
          {
            key: 'remark',
            type: 'CustomInput',
            label: {
              en: 'Remark',
              zh: '備注',
            },
            grid: 12,
          },
          {
            key: 'lineupEndpoint',
            type: 'CustomInput',
            label: {
              en: 'lineupEndpoint',
              zh: '排隊Endpoint',
            },
            grid: 12,
          },
          {
            key: 'reserveEndpoint',
            type: 'CustomInput',
            label: {
              en: 'Reserve Endpoint',
              zh: '訂位Endpoint',
            },
            grid: 12,
          },
          {
            key: 'orderEndpoint',
            type: 'CustomInput',
            label: {
              en: 'orderEndpoint',
              zh: '點餐Endpoint',
            },
            grid: 12,
          },
          {
            key: 'startdate',
            type: 'CustomDatepicker',
            label: {
              en: 'start date',
              zh: '由',
            },
            grid: 6,
          },
          {
            key: 'enddate',
            type: 'CustomDatepicker',
            label: {
              en: 'end date',
              zh: '至',
            },
            grid: 6,
          },
          {
            key: 'map',
            type: 'CustomMapPicker',
            label: {
              en: 'map',
              zh: 'map',
            },
            grid: 12,
          },
        ],
        buttons: [
          {
            key: 'save',
            buttonType: 'submit',
            label: {
              en: 'save',
              zh: '儲存',
            },
          },
          {
            key: 'cancel',
            buttonType: 'reset',
            label: {
              en: 'cancel',
              zh: '取消',
            },
          },
        ],
      },
    ],
  },
  {
    title: {
      en: '',
      zh: '',
    },
    path: 'admin/category/edit',
    elements: [
      {
        modal: 'EditModal',
        components: [
          {
            key: 'status',
            type: 'CustomSwitch',
            label: {
              en: 'Status',
              zh: '狀態',
            },
            grid: 12,
          },
          {
            key: 'branchName',
            type: 'CustomInput',
            label: {
              en: 'Product Name',
              zh: '名稱',
            },
            grid: 12,
          },
        ],
        buttons: [
          {
            key: 'save',
            buttonType: 'submit',
            label: {
              en: 'save',
              zh: '儲存',
            },
          },
          {
            key: 'cancel',
            buttonType: 'reset',
            label: {
              en: 'cancel',
              zh: '取消',
            },
          },
        ],
      },
    ],
  },
  {
    title: {
      en: '',
      zh: '',
    },
    path: 'admin/area/edit',
    elements: [
      {
        modal: 'EditModal',
        components: [
          {
            key: 'area',
            type: 'CustomInput',
            label: {
              en: 'area',
              zh: '地區',
            },
            grid: 12,
          },
          {
            key: 'state',
            type: 'CustomInput',
            label: {
              en: 'state',
              zh: '區域',
            },
            grid: 12,
          },
          {
            key: 'landmark',
            type: 'CustomInput',
            label: {
              en: 'landmark of center pointer',
              zh: '中心點地標',
            },
            grid: 12,
          },
          {
            key: 'map',
            type: 'CustomMapPicker',
            label: {
              en: 'map',
              zh: 'map',
            },
            grid: 12,
          },
        ],
        buttons: [
          {
            key: 'save',
            buttonType: 'submit',
            label: {
              en: 'save',
              zh: '儲存',
            },
          },
          {
            key: 'cancel',
            buttonType: 'reset',
            label: {
              en: 'cancel',
              zh: '取消',
            },
          },
        ],
      },
    ],
  },
  {
    title: {
      en: '',
      zh: '',
    },
    path: 'admin/faq-category/edit',
    elements: [
      {
        modal: 'EditModal',
        components: [
          {
            key: 'status',
            type: 'CustomSwitch',
            label: {
              en: 'status',
              zh: '狀態',
            },
            grid: 12,
          },
          {
            key: 'faqCategory',
            type: 'CustomInput',
            label: {
              en: 'faqCategory',
              zh: '常見問題種類',
            },
            grid: 12,
          },
        ],
        buttons: [
          {
            key: 'save',
            buttonType: 'submit',
            label: {
              en: 'save',
              zh: '儲存',
            },
          },
          {
            key: 'cancel',
            buttonType: 'reset',
            label: {
              en: 'cancel',
              zh: '取消',
            },
          },
        ],
      },
    ],
  },
  {
    title: {
      en: '',
      zh: '',
    },
    path: 'admin/faq/edit',
    elements: [
      {
        modal: 'EditModal',
        components: [
          {
            key: 'status',
            type: 'CustomSwitch',
            label: {
              en: 'status',
              zh: '狀態',
            },
            grid: 12,
          },
          {
            key: 'faqCategory',
            type: 'CustomInput',
            label: {
              en: 'faqCategory',
              zh: '常見問題種類',
            },
            grid: 12,
          },
          {
            key: 'question',
            type: 'CustomInput',
            label: {
              en: 'question',
              zh: '問題',
            },
            grid: 12,
          },
          {
            key: 'answer',
            type: 'CustomEditor',
            label: {
              en: 'answer',
              zh: '答案',
            },
            grid: 12,
          },
        ],
        buttons: [
          {
            key: 'save',
            buttonType: 'submit',
            label: {
              en: 'save',
              zh: '儲存',
            },
          },
          {
            key: 'cancel',
            buttonType: 'reset',
            label: {
              en: 'cancel',
              zh: '取消',
            },
          },
        ],
      },
    ],
  },
  {
    title: {
      en: '',
      zh: '',
    },
    path: 'admin/contact/edit',
    elements: [
      {
        modal: 'EditModal',
        components: [
          {
            key: 'status',
            type: 'CustomSwitch',
            label: {
              en: 'status',
              zh: '狀態',
            },
            grid: 12,
          },
          {
            key: 'emailTitle',
            type: 'CustomInput',
            label: {
              en: 'Email Title',
              zh: '電郵主題',
            },
            grid: 12,
          },
        ],
        buttons: [
          {
            key: 'save',
            buttonType: 'submit',
            label: {
              en: 'save',
              zh: '儲存',
            },
          },
          {
            key: 'cancel',
            buttonType: 'reset',
            label: {
              en: 'cancel',
              zh: '取消',
            },
          },
        ],
      },
    ],
  },
  {
    title: {
      en: '',
      zh: '',
    },
    path: 'admin/app-version/edit',
    elements: [
      {
        modal: 'EditModal',
        components: [
          {
            key: 'status',
            type: 'CustomSwitch',
            label: {
              en: 'status',
              zh: '狀態',
            },
            grid: 12,
          },
          {
            key: 'IOS',
            type: 'CustomSwitch',
            label: {
              en: 'IOS Force update',
              zh: 'IOS強制更新',
            },
            grid: 1,
          },
          {
            key: 'Android',
            type: 'CustomSwitch',
            label: {
              en: 'Android Force Update',
              zh: 'Android強制更新',
            },
            grid: 1,
          },
          {
            key: 'iosversion',
            type: 'CustomInput',
            label: {
              en: 'IOS Version',
              zh: 'IOS版本',
            },
            grid: 6,
          },
          {
            key: 'androidVersion',
            type: 'CustomInput',
            label: {
              en: 'Android Version',
              zh: 'Android版本',
            },
            grid: 6,
          },
          {
            key: 'forceupdatecontent',
            type: 'CustomInput',
            label: {
              en: 'Force Update Content',
              zh: '强制更新内容',
            },
            grid: 12,
          },
          {
            key: 'startdate',
            type: 'CustomDatepicker',
            label: {
              en: 'start date',
              zh: '由',
            },
            grid: 6,
          },
          {
            key: 'enddate',
            type: 'CustomDatepicker',
            label: {
              en: 'end date',
              zh: '至',
            },
            grid: 6,
          },
        ],
        buttons: [
          {
            key: 'save',
            buttonType: 'submit',
            label: {
              en: 'save',
              zh: '儲存',
            },
          },
          {
            key: 'cancel',
            buttonType: 'reset',
            label: {
              en: 'cancel',
              zh: '取消',
            },
          },
        ],
      },
    ],
  },
  {
    title: {
      en: '',
      zh: '',
    },
    path: 'admin/banner/edit',
    elements: [
      {
        modal: 'EditModal',
        components: [
          {
            key: 'status',
            type: 'CustomSwitch',
            label: {
              en: 'status',
              zh: '狀態',
            },
            grid: 12,
          },
          {
            key: 'internaltitle',
            type: 'CustomInput',
            label: {
              en: 'Internal Title',
              zh: 'Internal 標題',
            },
            grid: 6,
          },
          {
            key: 'promotionid',
            type: 'CustomInput',
            label: {
              en: 'Promotion ID',
              zh: 'Promotion ID',
            },
            grid: 6,
          },
          {
            key: 'connectiontype',
            type: 'CustomInput',
            label: {
              en: 'Connection Type',
              zh: '連結種類',
            },
            grid: 12,
          },
          {
            key: 'startdate',
            type: 'CustomDatepicker',
            label: {
              en: 'start date',
              zh: '由',
            },
            grid: 6,
          },
          {
            key: 'enddate',
            type: 'CustomDatepicker',
            label: {
              en: 'end date',
              zh: '至',
            },
            grid: 6,
          },
          {
            key: 'date',
            type: 'CustomImages',
            label: {
              en: 'date',
              zh: 'date',
            },
            grid: 12,
          },
        ],
        buttons: [
          {
            key: 'save',
            buttonType: 'submit',
            label: {
              en: 'save',
              zh: '儲存',
            },
          },
          {
            key: 'cancel',
            buttonType: 'reset',
            label: {
              en: 'cancel',
              zh: '取消',
            },
          },
        ],
      },
    ],
  },
  {
    title: {
      en: '',
      zh: '',
    },
    path: 'admin/stampCard/edit',
    elements: [
      {
        modal: 'EditModal',
        components: [
          {
            key: 'status',
            type: 'CustomSwitch',
            label: {
              en: 'status',
              zh: '狀態',
            },
            grid: 12,
          },
          {
            key: 'internaltitle',
            type: 'CustomColorPicker',
            label: {
              en: 'Coupon Color',
              zh: '印仔顔色',
            },
            grid: 12,
          },
          {
            key: 'startdate',
            type: 'CustomDatepicker',
            label: {
              en: 'start date',
              zh: '由',
            },
            grid: 6,
          },
          {
            key: 'enddate',
            type: 'CustomDatepicker',
            label: {
              en: 'end date',
              zh: '至',
            },
            grid: 6,
          },
          {
            key: 'giftImage',
            type: 'CustomImages',
            label: {
              en: 'Gift Image',
              zh: '禮物圖案',
            },
            grid: 12,
          },
        ],
        buttons: [
          {
            key: 'save',
            buttonType: 'submit',
            label: {
              en: 'save',
              zh: '儲存',
            },
          },
          {
            key: 'cancel',
            buttonType: 'reset',
            label: {
              en: 'cancel',
              zh: '取消',
            },
          },
        ],
      },
    ],
  },
  {
    title: {
      en: '',
      zh: '',
    },
    path: 'admin/referral/edit',
    elements: [
      {
        modal: 'EditModal',
        components: [
          {
            key: 'status',
            type: 'CustomSwitch',
            label: {
              en: 'status',
              zh: '狀態',
            },
            grid: 12,
          },
          {
            key: 'name',
            type: 'CustomInput',
            label: {
              en: 'Nick Name',
              zh: '名稱',
            },
            grid: 12,
          },
          {
            key: 'modal',
            type: 'CustomInput',
            label: {
              en: 'Modal',
              zh: '模板',
            },
            grid: 12,
          },
          {
            key: 'Image',
            type: 'CustomImages',
            label: {
              en: 'Image',
              zh: '圖片',
            },
            grid: 12,
          },
          {
            key: 'introduce',
            type: 'CustomEditor',
            label: {
              en: 'Introduction',
              zh: '簡介',
            },
            grid: 12,
          },
          {
            key: 'tandc',
            type: 'CustomEditor',
            label: {
              en: 'T&C',
              zh: 'T&C',
            },
            grid: 12,
          },
          {
            key: 'startdate',
            type: 'CustomDatepicker',
            label: {
              en: 'start date',
              zh: '由',
            },
            grid: 6,
          },
          {
            key: 'enddate',
            type: 'CustomDatepicker',
            label: {
              en: 'end date',
              zh: '至',
            },
            grid: 6,
          },
        ],
        buttons: [
          {
            key: 'save',
            buttonType: 'submit',
            label: {
              en: 'save',
              zh: '儲存',
            },
          },
          {
            key: 'cancel',
            buttonType: 'reset',
            label: {
              en: 'cancel',
              zh: '取消',
            },
          },
        ],
      },
    ],
  },
  {
    title: {
      en: '',
      zh: '',
    },
    path: 'admin/campaign/edit',
    elements: [
      {
        modal: 'EditModal',
        components: [
          {
            key: 'status',
            type: 'CustomSwitch',
            label: {
              en: 'status',
              zh: '狀態',
            },
            grid: 12,
          },
          {
            key: 'internaltitle',
            type: 'CustomInput',
            label: {
              en: 'Internal Title',
              zh: 'Internal 標題',
            },
            grid: 12,
          },
          {
            key: 'MainTitle',
            type: 'CustomInput',
            label: {
              en: 'Main Title',
              zh: '標題',
            },
            grid: 12,
          },
          {
            key: 'subTitle',
            type: 'CustomInput',
            label: {
              en: 'SubTitle',
              zh: '副標題',
            },
            grid: 12,
          },
          {
            key: 'Image',
            type: 'CustomImages',
            label: {
              en: 'Image',
              zh: '圖片',
            },
            grid: 12,
          },
          {
            key: 'brand',
            type: 'CustomInput',
            label: {
              en: 'Brand',
              zh: '品牌',
            },
            grid: 12,
          },
          {
            key: 'content',
            type: 'CustomEditor',
            label: {
              en: 'Content',
              zh: '内容',
            },
            grid: 12,
          },
          {
            key: 'CTA',
            type: 'CustomInput',
            label: {
              en: 'CTA',
              zh: 'CTA',
            },
            grid: 12,
          },
          {
            key: 'linktype',
            type: 'CustomInput',
            label: {
              en: 'Connection Type',
              zh: '連接種類',
            },
            grid: 12,
          },
          {
            key: 'linkid',
            type: 'CustomInput',
            label: {
              en: 'Connection ID',
              zh: '連接ID',
            },
            grid: 12,
          },
          {
            key: 'startdate',
            type: 'CustomDatepicker',
            label: {
              en: 'start date',
              zh: '由',
            },
            grid: 6,
          },
          {
            key: 'enddate',
            type: 'CustomDatepicker',
            label: {
              en: 'end date',
              zh: '至',
            },
            grid: 6,
          },
        ],
        buttons: [
          {
            key: 'save',
            buttonType: 'submit',
            label: {
              en: 'save',
              zh: '儲存',
            },
          },
          {
            key: 'cancel',
            buttonType: 'reset',
            label: {
              en: 'cancel',
              zh: '取消',
            },
          },
        ],
      },
    ],
  },
  {
    title: {
      en: '',
      zh: '',
    },
    path: 'admin/popup-banner/edit',
    elements: [
      {
        modal: 'EditModal',
        components: [
          {
            key: 'status',
            type: 'CustomSwitch',
            label: {
              en: 'status',
              zh: '狀態',
            },
            grid: 12,
          },
          {
            key: 'name',
            type: 'CustomInput',
            label: {
              en: 'Banner Name',
              zh: '名稱',
            },
            grid: 12,
          },
          {
            key: 'connection',
            type: 'CustomInput',
            label: {
              en: 'Link to ',
              zh: '頁面指向',
            },
            grid: 12,
          },
          {
            key: 'connectionID',
            type: 'CustomInput',
            label: {
              en: 'Connection ID',
              zh: '連接ID',
            },
            grid: 12,
          },
          {
            key: 'startdate',
            type: 'CustomDatepicker',
            label: {
              en: 'start date',
              zh: '由',
            },
            grid: 6,
          },
          {
            key: 'enddate',
            type: 'CustomDatepicker',
            label: {
              en: 'end date',
              zh: '至',
            },
            grid: 6,
          },
          {
            key: 'bannerImage',
            type: 'CustomImages',
            label: {
              en: 'Banner Images',
              zh: '橫額圖片',
            },
            grid: 12,
          },
          {
            key: 'MainImages',
            type: 'CustomSwitch',
            label: {
              en: 'Main Images',
              zh: '主要圖片',
            },
            grid: 12,
          },
        ],
        buttons: [
          {
            key: 'save',
            buttonType: 'submit',
            label: {
              en: 'save',
              zh: '儲存',
            },
          },
          {
            key: 'cancel',
            buttonType: 'reset',
            label: {
              en: 'cancel',
              zh: '取消',
            },
          },
        ],
      },
    ],
  },
  {
    title: {
      en: 'Event Management',
      zh: '幸運抽獎管理',
    },
    path: 'admin/event/edit',
    elements: [
      {
        modal: 'EditModal',
        components: [
          {
            key: 'status',
            type: 'CustomSwitch',
            label: {
              en: 'status',
              zh: '狀態',
            },
            grid: 12,
          },
          {
            key: 'name',
            type: 'CustomInput',
            label: {
              en: 'Event Name',
              zh: '名稱',
            },
            grid: 6,
          },
          {
            key: 'nameEN',
            type: 'CustomInput',
            label: {
              en: 'Event Name(EN)',
              zh: '名稱(EN)',
            },
            grid: 6,
          },
          {
            key: 'connection',
            type: 'CustomInput',
            label: {
              en: 'Link to ',
              zh: '頁面指向',
            },
            grid: 12,
          },
          {
            key: 'connectionID',
            type: 'CustomInput',
            label: {
              en: 'Connection ID',
              zh: '連接ID',
            },
            grid: 12,
          },
          {
            key: 'startdate',
            type: 'CustomDatepicker',
            label: {
              en: 'start date',
              zh: '由',
            },
            grid: 6,
          },
          {
            key: 'enddate',
            type: 'CustomDatepicker',
            label: {
              en: 'end date',
              zh: '至',
            },
            grid: 6,
          },
          {
            key: 'bannerImage',
            type: 'CustomImages',
            label: {
              en: 'Banner Images',
              zh: '橫額圖片',
            },
            grid: 12,
          },
          {
            key: 'MainImages',
            type: 'CustomSwitch',
            label: {
              en: 'Main Images',
              zh: '主要圖片',
            },
            grid: 12,
          },
        ],
        buttons: [
          {
            key: 'save',
            buttonType: 'submit',
            label: {
              en: 'save',
              zh: '儲存',
            },
          },
          {
            key: 'cancel',
            buttonType: 'reset',
            label: {
              en: 'cancel',
              zh: '取消',
            },
          },
        ],
      },
    ],
  },
  {
    title: {
      en: '',
      zh: '',
    },
    path: 'admin/role-permission/edit',
    elements: [
      {
        modal: 'EditModal',
        components: [
          {
            key: 'status',
            type: 'CustomSwitch',
            label: {
              en: 'status',
              zh: '狀態',
            },
            grid: 12,
          },
          {
            key: 'name',
            type: 'CustomInput',
            label: {
              en: 'Event Name',
              zh: '名稱',
            },
            grid: 6,
          },
          {
            key: 'nameEN',
            type: 'CustomInput',
            label: {
              en: 'Event Name(EN)',
              zh: '名稱(EN)',
            },
            grid: 6,
          },
          {
            key: 'connection',
            type: 'CustomInput',
            label: {
              en: 'Link to ',
              zh: '頁面指向',
            },
            grid: 12,
          },
          {
            key: 'connectionID',
            type: 'CustomInput',
            label: {
              en: 'Connection ID',
              zh: '連接ID',
            },
            grid: 12,
          },
          {
            key: 'startdate',
            type: 'CustomDatepicker',
            label: {
              en: 'start date',
              zh: '由',
            },
            grid: 6,
          },
          {
            key: 'enddate',
            type: 'CustomDatepicker',
            label: {
              en: 'end date',
              zh: '至',
            },
            grid: 6,
          },
          {
            key: 'bannerImage',
            type: 'CustomImages',
            label: {
              en: 'Banner Images',
              zh: '橫額圖片',
            },
            grid: 12,
          },
          {
            key: 'MainImages',
            type: 'CustomSwitch',
            label: {
              en: 'Main Images',
              zh: '主要圖片',
            },
            grid: 12,
          },
        ],
        buttons: [
          {
            key: 'save',
            buttonType: 'submit',
            label: {
              en: 'save',
              zh: '儲存',
            },
          },
          {
            key: 'cancel',
            buttonType: 'reset',
            label: {
              en: 'cancel',
              zh: '取消',
            },
          },
        ],
      },
    ],
  },
];
