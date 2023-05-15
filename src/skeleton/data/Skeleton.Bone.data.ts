import { SkeletonProps } from '../skeleton.interface';

export const Skeleton: SkeletonProps = {
  menu: {
    title: 'FirstTitle',
    sections: [
      {
        title: {
          en: 'Brand',
          zh: '品牌管理',
        },
        path: 'admin/brand',
        icon: { title: 'BackupTableIcon', sx: 'iconWhite' },
        elements: [
          {
            modal: 'SearchModal',
            translateKey: 'brand',
            components: [
              {
                key: 'keyword',
                type: 'CustomSearch',
                label: {
                  en: 'Keyword',
                  zh: '關鍵字',
                },
                grid: 12,
                translateKey: 'brand',
              },
              {
                key: 'cuisine',
                type: 'CustomSelector',
                label: {
                  en: 'Cuisine',
                  zh: '菜式',
                },
                grid: 6,
                translateKey: 'brand',
              },
              {
                key: 'status',
                type: 'CustomSelector',
                label: {
                  en: 'Status',
                  zh: '狀態',
                },
                grid: 6,
                translateKey: 'brand',
              },
            ],
            buttons: [
              {
                key: 'confirm',
                label: {
                  en: 'Confirm',
                  zh: '確認',
                },
                buttonType: 'submit',
              },
              {
                key: 'reset',
                label: {
                  en: 'Cancel',
                  zh: '取消',
                },
                buttonType: 'reset',
              },
            ],
          },
          {
            modal: 'TableModal',
            translateKey: 'brand',
            components: [
              {
                key: 'table',
                type: 'CustomTable',
                editPath: 'admin/brand/edit/',
                tableList: {
                  tr1: {
                    key: 'brandcode',
                    label: {
                      en: 'Brand Code',
                      zh: '品牌名稱',
                    },
                  },
                  tr2: {
                    key: 'brandname',
                    label: {
                      en: 'Brand Name',
                      zh: '品牌名稱',
                    },
                  },
                  tr3: {
                    key: 'status',
                    label: {
                      en: 'Status',
                      zh: '狀態',
                    },
                  },
                  tr4: {
                    key: 'updated at',
                    label: {
                      en: 'Updated At',
                      zh: '更新於',
                    },
                  },
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
      {
        title: {
          en: 'Branch',
          zh: '商品管理',
        },
        path: 'admin/branch',
        icon: { title: 'BrandingWatermarkIcon', sx: 'iconWhite' },
        elements: [
          {
            modal: 'SearchModal',
            translateKey: 'branch',
            components: [
              {
                key: 'keyword',
                // TODO: {...all} to pass value and onChange to searchModal
                type: 'CustomSearch',
                label: {
                  en: 'Keyword',
                  zh: '區域關鍵字',
                },
                grid: 6,
                translateKey: 'branch',
              },
              {
                key: 'itemKeyword',
                type: 'CustomSearch',
                label: {
                  en: 'Item Keyword',
                  zh: '名稱',
                },
                grid: 6,
                translateKey: 'branch',
              },
              {
                key: 'brandID',
                type: 'CustomSelector',
                label: {
                  en: 'Brand ID',
                  zh: '品牌 ID',
                },
                grid: 6,
                translateKey: 'branch',
              },
              {
                key: 'cuisine',
                type: 'CustomSelector',
                label: {
                  en: 'Cuisine',
                  zh: '菜式',
                },
                grid: 6,
                translateKey: 'branch',
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
              {
                key: 'reset',
                label: {
                  en: 'cancel',
                  zh: '取消',
                },
                buttonType: 'reset',
              },
            ],
          },
          {
            modal: 'TableModal',
            translateKey: 'branch',
            components: [
              {
                key: 'table',
                type: 'CustomTable',
                editPath: 'admin/branch/edit',
                tableList: {
                  tr1: {
                    key: 'branchName',
                    label: {
                      en: 'Branch Name',
                      zh: '名稱',
                    },
                  },
                  tr2: {
                    key: 'branchcode',
                    label: {
                      en: 'Branch Code',
                      zh: '分店編號',
                    },
                  },
                  tr3: {
                    key: 'belongbranch',
                    label: {
                      en: 'Belong Branch',
                      zh: '所屬品牌',
                    },
                  },
                  tr4: {
                    key: 'status',
                    label: {
                      en: 'Status',
                      zh: '狀態',
                    },
                  },
                },
                grid: 12,
                editables: true,
                translateKey: 'branch',
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
      {
        title: {
          en: 'Category',
          zh: '商品分類',
        },
        path: 'admin/category',
        icon: { title: 'Inventory2Icon', sx: 'iconWhite' },
        elements: [
          {
            modal: 'TableModal',
            translateKey: 'category',
            components: [
              {
                key: 'table',
                editPath: 'admin/category/edit',
                type: 'CustomTable',
                tableList: {
                  tr1: {
                    key: 'cuisineid',
                    label: {
                      en: 'Cuisine ID',
                      zh: 'Cuisine ID',
                    },
                  },
                  tr2: {
                    key: 'categoryname',
                    label: {
                      en: 'Category Name',
                      zh: '名稱',
                    },
                  },
                  tr3: {
                    key: 'status',
                    label: {
                      en: 'Status',
                      zh: '狀態',
                    },
                  },
                },
                grid: 12,
                editables: true,
                translateKey: 'category',
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
          en: 'Area',
          zh: '地區分類',
        },
        path: 'admin/area',
        icon: { title: 'MapIcon', sx: 'iconWhite' },
        elements: [
          {
            modal: 'SearchModal',
            translateKey: 'area',
            components: [
              {
                key: 'itemKeyword',
                type: 'CustomSelector',
                label: {
                  en: 'Keyword',
                  zh: '區域',
                },
                grid: 6,
                translateKey: 'area',
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
            translateKey: 'area',
            components: [
              {
                key: 'table',
                editPath: 'admin/area/edit',
                type: 'CustomTable',
                tableList: {
                  tr1: {
                    key: 'uid',
                    label: {
                      en: 'ID',
                      zh: 'ID',
                    },
                  },
                  tr2: {
                    key: 'area',
                    label: {
                      en: 'area',
                      zh: '地區',
                    },
                  },
                  tr3: {
                    key: 'state',
                    label: {
                      en: 'state',
                      zh: '區域',
                    },
                  },
                  tr4: {
                    key: 'landmark',
                    label: {
                      en: 'Landmark Of CenterPointer',
                      zh: '中心點地標',
                    },
                  },
                },
                grid: 12,
                editables: true,
                translateKey: 'area',
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
    ],
  },
};
