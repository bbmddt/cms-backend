import { SkeletonProps } from '../skeleton.interface';

export const SkeletonApplication: SkeletonProps = {
  menu: {
    title: 'SecondTitle',
    sections: [
      {
        title: {
          en: 'T&C',
          zh: '一般T&C',
        },
        path: 'admin/tnc',
        icon: { title: 'MapIcon', sx: 'iconWhite' },
        elements: [
          {
            modal: 'EditModal',
            translateKey: 'tandc',
            components: [
              {
                key: 't&cTitle',
                type: 'CustomSearch',
                label: {
                  en: 'contentTitle',
                  zh: '條款及細則標題',
                },
                grid: 12,
                translateKey: 'tandc',
              },
              {
                key: 't&cContent',
                type: 'CustomSearch',
                label: {
                  en: 'contentTitle',
                  zh: '條款及細則標題',
                },
                grid: 12,
                translateKey: 'tandc',
              },
              {
                key: 'privacyPolicy',
                type: 'CustomSearch',
                label: {
                  en: 'privacyPolicy',
                  zh: '隱私政策標題',
                },
                grid: 12,
                translateKey: 'tandc',
              },
              {
                key: 'privacyContent',
                type: 'CustomSearch',
                label: {
                  en: 'privacyPolicy',
                  zh: '隱私政策標題',
                },
                grid: 12,
                translateKey: 'tandc',
              },
              {
                key: 'editBy',
                type: 'CustomSearch',
                label: {
                  en: 'editBy',
                  zh: '更新由',
                },
                grid: 12,
                translateKey: 'tandc',
              },
              {
                key: 'editFrom',
                type: 'CustomSearch',
                label: {
                  en: 'editFrom',
                  zh: '更新於',
                },
                grid: 12,
                translateKey: 'tandc',
              },
            ],
            buttons: [
              {
                key: 'save',
                label: {
                  en: 'save',
                  zh: '儲存',
                },
                buttonType: 'submit',
              },
            ],
          },
        ],
      },
      {
        title: {
          en: 'faqCategory',
          zh: '常見問題種類',
        },
        path: 'admin/faq-category',
        icon: { title: 'MapIcon', sx: 'iconWhite' },
        elements: [
          {
            modal: 'TableModal',
            translateKey: 'faqCategory',
            components: [
              {
                key: 'table',
                editPath: 'admin/faq-category/edit',
                type: 'CustomTable',

                tr1: {
                  en: 'faqCategory',
                  zh: '常見問題種類',
                },
                tr2: {
                  en: 'faqCategory',
                  zh: '常見問題種類',
                },
                tr3: {
                  en: 'faqCategory',
                  zh: '常見問題種類',
                },
                tr4: {
                  en: 'faqCategory',
                  zh: '常見問題種類',
                },
                grid: 12,
                editables: true,
                translateKey: 'faqCategory',
                operation: [
                  {
                    add: {
                      en: 'add',
                      zh: '新增',
                    },
                    sort: {
                      en: 'sort',
                      zh: '排序',
                    },
                    delete: {
                      en: 'delete',
                      zh: '刪除',
                    },
                  },
                ],
              },
            ],
            buttons: [
              {
                key: 'noBTN',
                label: {
                  en: '',
                  zh: '',
                },
                buttonType: undefined,
              },
            ],
          },
        ],
      },
      {
        title: {
          en: 'faq',
          zh: '常見問題',
        },
        path: 'admin/faq',
        icon: { title: 'MapIcon', sx: 'iconWhite' },
        elements: [
          {
            modal: 'SearchModal',
            translateKey: 'faq',
            components: [
              {
                key: 'Keyword',
                type: 'CustomSearch',
                label: {
                  en: 'keyword',
                  zh: '關鍵字',
                },
                grid: 12,
                translateKey: 'faq',
              },
              {
                key: 'faq-category',
                type: 'CustomSelector',
                label: {
                  en: 'faqCategory',
                  zh: '常見問題種類',
                },
                grid: 12,
                translateKey: 'faq',
              },
            ],
            buttons: [
              {
                key: 'search',
                label: {
                  en: 'search',
                  zh: '搜尋',
                },
                buttonType: 'submit',
              },
            ],
          },
          {
            modal: 'TableModal',
            translateKey: 'faq',
            components: [
              {
                key: 'table',
                type: 'CustomTable',
                editPath: 'admin/faq/edit',
                tr1: {
                  en: 'faqType',
                  zh: '問題種類',
                },
                tr2: {
                  en: 'question',
                  zh: '問題',
                },
                tr3: {
                  en: 'answer',
                  zh: '答案',
                },
                tr4: {
                  en: 'faqStatus',
                  zh: '狀態(啟用/停用)',
                },
                tr5: {
                  en: 'updated',
                  zh: '更新於',
                },
                tr6: {
                  en: 'edit',
                  zh: '編輯',
                },
                grid: 12,
                editables: true,
                translateKey: 'brand',
                operation: [
                  {
                    add: {
                      en: 'add',
                      zh: '新增',
                    },
                    sort: {
                      en: 'sort',
                      zh: '排序',
                    },
                    delete: {
                      en: 'delete',
                      zh: '刪除',
                    },
                  },
                ],
              },
            ],
            buttons: [
              {
                key: 'noBTN',
                label: {
                  en: '',
                  zh: '',
                },
                buttonType: undefined,
              },
            ],
          },
        ],
      },
      {
        title: {
          en: 'contact',
          zh: '聯絡我們',
        },
        path: 'admin/contact',
        icon: { title: 'MapIcon', sx: 'iconWhite' },
        elements: [
          {
            modal: 'SearchModal',
            translateKey: 'contact',
            components: [
              {
                key: 'contactUs',
                type: 'CustomMobile',
                label: {
                  en: 'contactUs',
                  zh: '聯絡我們',
                },
                grid: 12,
                translateKey: 'contact',
              },
            ],
            buttons: [
              {
                key: 'save',
                label: {
                  en: 'save',
                  zh: '儲存',
                },
                buttonType: 'submit',
              },
            ],
          },
          {
            modal: 'TableModal',
            translateKey: 'contact',
            components: [
              {
                key: 'table',
                type: 'CustomTable',
                editPath: 'admin/contact/edit',
                tr1: {
                  en: 'contactTitle',
                  zh: '電郵主題',
                },
                tr2: {
                  en: 'status',
                  zh: '狀態(啟用/停用)',
                },
                tr3: {
                  en: 'edit',
                  zh: '編輯',
                },
                grid: 12,
                editables: true,
                translateKey: 'contact',
                operation: [
                  {
                    add: {
                      en: 'add',
                      zh: '新增',
                    },
                    sort: {
                      en: 'sort',
                      zh: '排序',
                    },
                    delete: {
                      en: 'delete',
                      zh: '刪除',
                    },
                  },
                ],
              },
            ],
            buttons: [
              {
                key: 'save',
                label: {
                  en: 'save',
                  zh: '儲存',
                },
                buttonType: 'submit',
              },
            ],
          },
        ],
      },
      {
        title: {
          en: 'tutorial',
          zh: '導覽圖片',
        },
        path: 'admin/tutorial',
        icon: { title: 'MapIcon', sx: 'iconWhite' },
        elements: [
          {
            modal: 'EditModal',
            translateKey: 'tutorial',
            components: [
              {
                key: 'gallery',
                type: 'CustomImages',
                label: {
                  en: 'tutorial',
                  zh: '導覽圖片',
                },
                grid: 12,
                translateKey: 'tutorial',
              },
            ],
            buttons: [
              {
                key: 'save',
                label: {
                  en: 'save',
                  zh: '儲存',
                },
                buttonType: 'submit',
              },
            ],
          },
        ],
      },
      {
        title: {
          en: 'appVersion',
          zh: '強制更新',
        },
        path: 'admin/app-version',
        icon: { title: 'MapIcon', sx: 'iconWhite' },
        elements: [
          {
            modal: 'TableModal',
            translateKey: 'appVersion',
            components: [
              {
                key: 'table',
                type: 'CustomTable',
                editPath: 'admin/app-version/edit',
                tr1: {
                  en: 'upgradeIOSVersion',
                  zh: 'iOS 版本',
                },
                tr2: {
                  en: 'upgradeAndroidVersion',
                  zh: 'Android 版本',
                },
                tr3: {
                  en: 'startingTime',
                  zh: '開始時間',
                },
                tr4: {
                  en: 'endingTime',
                  zh: '結束時間',
                },
                tr5: {
                  en: 'status',
                  zh: '狀態(啟用/停用)',
                },
                grid: 12,
                editables: true,
                translateKey: 'appVersion',
                operation: [
                  {
                    add: {
                      en: 'add',
                      zh: '新增',
                    },
                    delete: {
                      en: 'delete',
                      zh: '刪除',
                    },
                  },
                ],
              },
            ],
            buttons: [
              {
                key: 'noBTN',
                label: {
                  en: '',
                  zh: '',
                },
                buttonType: undefined,
              },
            ],
          },
        ],
      },
      {
        title: {
          en: 'maintenance',
          zh: '系統維護',
        },
        path: 'admin/maintenance',
        icon: { title: 'MapIcon', sx: 'iconWhite' },
        elements: [
          {
            modal: 'EditModal',
            translateKey: 'maintenance',
            components: [
              {
                key: 'systemMaintenance',
                type: 'CustomSwitch',
                label: {
                  en: 'systemMaintenance',
                  zh: '系統維護',
                },
                grid: 3,
                translateKey: 'maintenance',
              },
              {
                key: 'IPBlock',
                type: 'IPBlock',
                label: {
                  en: 'IPBlock',
                  zh: 'IPBlock',
                },
                grid: 12,
                translateKey: '',
              },
              {
                key: 'maintenanceContent',
                type: 'CustomInput',
                label: {
                  en: 'maintenanceContent',
                  zh: '維護頁面內容',
                },
                grid: 12,
                translateKey: 'maintenance',
              },
              {
                key: 'startingTime',
                type: 'CustomDatepicker',
                label: {
                  en: 'startDate',
                  zh: '開始日期',
                },
                grid: 6,
                translateKey: 'maintenance',
              },
              {
                key: 'endingTime',
                type: 'CustomDatepicker',
                label: {
                  en: 'endedDate',
                  zh: '結束日期',
                },
                grid: 6,
                translateKey: 'maintenance',
              },
            ],
            buttons: [
              {
                key: 'save',
                label: {
                  en: 'save',
                  zh: '儲存',
                },
                buttonType: 'submit',
              },
            ],
          },
        ],
      },
      {
        title: {
          en: 'clearCache',
          zh: '清除快取',
        },
        path: 'admin/clear-cache',
        icon: { title: 'MapIcon', sx: 'iconWhite' },
        elements: [
          {
            modal: 'EditModal',
            translateKey: 'cleanCache',
            components: [
              {
                key: 'cleanCache',
                type: 'CleanCache',
                label: {
                  en: 'clearCache',
                  zh: '清除快取',
                },
                grid: 12,
                translateKey: 'cleanCache',
              },
            ],
            buttons: [
              {
                key: 'save',
                label: {
                  en: 'save',
                  zh: '儲存',
                },
                buttonType: 'submit',
              },
            ],
          },
        ],
      },
    ],
  },
};