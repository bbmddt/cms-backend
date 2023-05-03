import { SkeletonProps } from '../skeleton.interface';

export const SkeletonSetting: SkeletonProps = {
  menu: {
    title: '設定',
    sections: [
      {
        title: {
          en: 'Role-Permission',
          zh: '用戶群',
        },
        path: 'admin/banner',
        icon: { title: 'MapIcon', sx: 'iconWhite' },
        elements: [
          {
            modal: 'TableModal',
            translateKey: 'RolePermission',
            components: [
              {
                key: 'RolePermission',
                editPath: 'admin/RolePermission/edit',
                type: 'CustomTable',
                tr1: {
                  en: 'UserName',
                  zh: '用戶名',
                },
                tr2: {
                  en: 'Status',
                  zh: '狀態',
                },
                grid: 12,
                editables: true,
                translateKey: 'RolePermission',
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
          en: 'accounts',
          zh: '帳戶',
        },
        path: 'admin/accounts',
        icon: { title: 'BackupTableIcon', sx: 'iconWhite' },
        elements: [
          {
            modal: 'SearchModal',
            translateKey: 'accounts',
            components: [
              {
                key: 'alluser',
                type: 'CustomSearch',
                label: {
                  en: 'All User',
                  zh: '用戶群',
                },
                grid: 12,
                translateKey: 'accounts',
              },
              {
                key: 'email',
                type: 'CustomSelector',
                label: {
                  en: 'Email',
                  zh: '電子郵件',
                },
                grid: 6,
                translateKey: 'accounts',
              },
              {
                key: 'status',
                type: 'CustomSelector',
                label: {
                  en: 'Status',
                  zh: '狀態',
                },
                grid: 6,
                translateKey: 'accounts',
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
            translateKey: 'accounts',
            components: [
              {
                key: 'table',
                type: 'CustomTable',
                editPath: 'admin/accounts/edit/',
                tr1: {
                  en: 'Name',
                  zh: '名稱',
                },
                tr2: {
                  en: 'Email',
                  zh: '電子郵件',
                },
                tr3: {
                  en: 'Brand Code',
                  zh: '品牌組織',
                },
                tr4: {
                  en: 'All User',
                  zh: '用戶群',
                },
                tr5: {
                  en: 'status',
                  zh: '狀態',
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
                    upload: {
                      en: 'Upload',
                      zh: '批量更新/上傳',
                    },
                    export: {
                      en: 'Export',
                      zh: '匯出',
                    },
                    download: {
                      en: 'Download',
                      zh: '下載 excel 模板',
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
