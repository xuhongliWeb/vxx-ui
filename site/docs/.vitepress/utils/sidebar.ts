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
        { text: 'Button 按钮', link: '/components/button' },
        { text: 'Icon 图标', link: '/components/icon' },
        { text: 'Link 链接', link: '/components/link' },
      ]
    }, {
      text: 'Form 表单组件',
      link: '/components/',
      items: [
        { text: 'Input 输入框', link: '/components/input' },
        { text: 'Radio 单选框', link: '/components/radio' },
        { text: 'CheckBox 多选框', link: '/components/checkbox' },
        { text: 'Switch 开关', link: '/components/switch' },
        { text: 'Select 选择器', link: '/components/select' },
        { text: 'Upload 上传', link: '/components/upload' },
        { text: 'Rate 评分', link: '/components/rate' }
      ]
    }
  ]
}
