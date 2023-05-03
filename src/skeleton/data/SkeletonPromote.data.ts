import { SkeletonProps } from '../skeleton.interface';

export const SkeletonPromote: SkeletonProps = {
  menu: {
    title: '幸運抽獎管理',
    sections: [
      {
        title: {
          en: 'Event Management',
          zh: '幸運抽獎管理',
        },
        path: 'admin/event',
        icon: { title: 'BackupTableIcon', sx: 'iconWhite' },
        elements: [
          {
            modal: 'TableModal',
            translateKey: 'event',
            components: [
              {
                key: 'table',
                type: 'CustomTable',
                editPath: 'admin/event/edit/',
                tr1: {
                  en: 'Name(TD)',
                  zh: '名稱',
                },
                tr2: {
                  en: 'Name(EN)',
                  zh: '名稱(EN)',
                },
                tr3: {
                  en: 'Status',
                  zh: '狀態(啓用/停用)',
                },
                tr4: {
                  en: 'Started On',
                  zh: '由',
                },
                tr5: {
                  en: 'Ended On',
                  zh: '至',
                },
                grid: 12,
                editables: true,
                translateKey: 'event',
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
      {
        title: {
          en: 'Event Report',
          zh: '幸運抽獎報告',
        },
        path: 'admin/report',
        icon: { title: 'BackupTableIcon', sx: 'iconWhite' },
        elements: [
          {
            modal: 'TableModal',
            translateKey: 'event',
            components: [
              {
                key: 'table',
                type: 'CustomTable',
                editPath: 'admin/report/edit/',
                tr1: {
                  en: 'Name(TD)',
                  zh: '名稱',
                },
                tr2: {
                  en: 'Name(EN)',
                  zh: '名稱(EN)',
                },
                tr3: {
                  en: 'Status',
                  zh: '狀態(啓用/停用)',
                },
                tr4: {
                  en: 'Started On',
                  zh: '由',
                },
                tr5: {
                  en: 'Ended On',
                  zh: '至',
                },
                grid: 12,
                editables: true,
                translateKey: 'event',
                operation: [{}],
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
