import { SkeletonProps } from '../skeleton.interface';

export const SkeletonPromote: SkeletonProps = {
  menu: {
    title: 'Promotion',
    sections: [
      {
        title: {
          en: 'Banner',
          zh: '首頁橫額',
        },
        path: 'admin/banner',
        icon: { title: 'BackupTableIcon', sx: 'iconWhite' },
        elements: [
          {
            modal: 'TableModal',
            translateKey: 'banner',
            components: [
              {
                key: 'table',
                type: 'CustomTable',
                editPath: 'admin/banner/edit/',
                tr1: {
                  en: 'Subject',
                  zh: '狀態',
                },
                tr2: {
                  en: 'Promo ID',
                  zh: '推廣 ID',
                },
                tr3: {
                  en: 'Banner Image',
                  zh: '橫額圖片',
                },
                tr4: {
                  en: 'Started On',
                  zh: '開始日期',
                },
                tr5: {
                  en: 'Ended On',
                  zh: '結束日期',
                },
                tr6: {
                  en: 'Status(On/Off)',
                  zh: '狀態 (啟用/停用)',
                },
                grid: 12,
                editables: true,
                translateKey: 'brand',
                operation: [
                  {
                    add: {
                      en: 'Add',
                      zh: '新增',
                    },
                    sort: {
                      en: 'Sort',
                      zh: '排序',
                    },
                    delete: {
                      en: 'Delete',
                      zh: '刪除',
                    },
                  },
                ],
              },
            ],
            buttons: [
              {
                key: 'noBTN',
                label: { en: '', zh: '' },
                buttonType: undefined,
              },
            ],
          },
        ],
      },
      {
        title: {
          en: 'stampCard',
          zh: '印仔卡圖案',
        },
        path: 'admin/stampCard',
        icon: { title: 'BackupTableIcon', sx: 'iconWhite' },
        elements: [
          {
            modal: 'TableModal',
            translateKey: 'stampCard',
            components: [
              {
                key: 'table',
                type: 'CustomTable',
                editPath: 'admin/stampCard/edit/',
                tr1: {
                  en: 'Stamp Color',
                  zh: '印仔顏色',
                },
                tr2: {
                  en: 'Stamp Image',
                  zh: '禮物圖案',
                },
                tr3: {
                  en: 'Started On',
                  zh: '開始日期',
                },
                tr4: {
                  en: 'Ended On',
                  zh: '結束日期',
                },
                tr5: {
                  en: 'Status(On/Off)',
                  zh: '狀態 (啟用/停用)',
                },
                grid: 12,
                editables: true,
                translateKey: 'stampCard',
                operation: [
                  {
                    add: {
                      en: 'Add',
                      zh: '新增',
                    },
                    sort: {
                      en: 'Sort',
                      zh: '排序',
                    },
                    delete: {
                      en: 'Delete',
                      zh: '刪除',
                    },
                  },
                ],
              },
            ],
            buttons: [
              {
                key: 'noBTN',
                label: { en: '', zh: '' },
                buttonType: undefined,
              },
            ],
          },
        ],
      },
      {
        title: {
          en: 'Referral',
          zh: '印仔卡圖案',
        },
        path: 'admin/referral',
        icon: { title: 'BackupTableIcon', sx: 'iconWhite' },
        elements: [
          {
            modal: 'EditModal',
            translateKey: 'stampCard',
            components: [
              {
                key: 'referral',
                // TODO: {...all} to pass value and onChange to searchModal
                type: 'CustomSwitch',
                label: {
                  en: 'Status',
                  zh: '狀態',
                },
                grid: 3,
                translateKey: 'referral',
              },
            ],
            buttons: [
              {
                key: 'confirm',
                label: {
                  en: 'confirm',
                  zh: '確認',
                },
                buttonType: 'submit',
              },
            ],
          },
          {
            modal: 'TableModal',
            translateKey: 'stampCard',
            components: [
              {
                key: 'table',
                type: 'CustomTable',
                editPath: 'admin/stampCard/edit/',
                tr1: {
                  en: 'Name',
                  zh: '印仔顏色',
                },
                tr2: {
                  en: 'Template',
                  zh: '禮物圖案',
                },
                tr3: {
                  en: 'Status(On/Off)',
                  zh: '開始日期',
                },
                grid: 12,
                editables: true,
                translateKey: 'stampCard',
                operation: [
                  {
                    add: {
                      en: 'Add',
                      zh: '新增',
                    },
                    sort: {
                      en: 'Sort',
                      zh: '排序',
                    },
                    delete: {
                      en: 'Delete',
                      zh: '刪除',
                    },
                  },
                ],
              },
            ],
            buttons: [
              {
                key: 'noBTN',
                label: { en: '', zh: '' },
                buttonType: undefined,
              },
            ],
          },
        ],
      },
      {
        title: {
          en: 'stampCard',
          zh: '印仔卡圖案',
        },
        path: 'admin/stampCard',
        icon: { title: 'BackupTableIcon', sx: 'iconWhite' },
        elements: [
          {
            modal: 'TableModal',
            translateKey: 'stampCard',
            components: [
              {
                key: 'table',
                type: 'CustomTable',
                editPath: 'admin/stampCard/edit/',
                tr1: {
                  en: 'Campaign ID',
                  zh: '活動 ID',
                },
                tr2: {
                  en: 'Internal Subject',
                  zh: '內部標題',
                },
                tr3: {
                  en: 'Subject',
                  zh: '標題',
                },
                tr4: {
                  en: 'Status(On/Off)',
                  zh: '狀態(啟用/停用)',
                },
                tr5: {
                  en: 'Started On',
                  zh: '開始日期',
                },
                tr6: {
                  en: 'Ended On',
                  zh: '停止日期',
                },
                grid: 12,
                editables: true,
                translateKey: 'stampCard',
                operation: [
                  {
                    add: {
                      en: 'Add',
                      zh: '新增',
                    },
                    delete: {
                      en: 'Delete',
                      zh: '刪除',
                    },
                  },
                ],
              },
            ],
            buttons: [
              {
                key: 'noBTN',
                label: { en: '', zh: '' },
                buttonType: undefined,
              },
            ],
          },
        ],
      },
    ],
  },
};
