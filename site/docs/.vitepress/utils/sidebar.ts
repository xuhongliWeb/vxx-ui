export const sidebar = {
  '/docs/': [
    {
      text: '开发指南',
      link: '/docs/',
      items: [
        { text: '指南', link: '/docs/installation' },
        { text: '快速上手', link: '/docs/quickstart' }
      ]
    }
  ],
  '/components/': [
    {
      text: '基础组件',
      link: '/components/',
      items: [
        { text: '按钮 Button ', link: '/components/button' },
        { text: '图标 Icon ', link: '/components/icon' },
        { text: '链接 Link ', link: '/components/link' },
      ]
    }, {
      text: 'Form 表单组件',
      link: '/components/',
      items: [
        { text: '输入框 Input ', link: '/components/input' },
        { text: '单选框 Radio ', link: '/components/radio' },
        { text: '多选框 CheckBox ', link: '/components/checkbox' },
        { text: '开关 Switch ', link: '/components/switch' },
      ]
    },
     {
        text: '反馈组件',
        link: '/components/',
        items: [
          { text: '气泡确认 Popconfirm', link: '/components/popconfirm' },
          { text: '对话框 Modal', link: '/components/modal' },
          { text: '图片 Image', link: '/components/image' },
        ]
      }
  ]
}
