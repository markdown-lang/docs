import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Markdown Lang",
  description: "用markdown开发软件",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '表结构', link: '/db' },
      { text: '主数据', link: '/data' },
      { text: 'REST API', link: '/api'},
      { text: 'UI', link: '/ui'},
      { text: '程序模块', link: '/module'},
      { text: '业务场景', link: '/case'},
      { text: '工具', link: '/tool'},
    ],

    sidebar: {
      '/db/': [
        {
          text: '表结构',
          items: [
            { text: '目录', link: '/db/' },
          ]
        },
      ],
      '/data/': [
        {
          text: '主数据',
          items: [
            { text: '目录', link: '/data/' },
          ]
        }
      ],
      '/api/': [
        {
          text: 'REST API',
          items: [
            { text: '目录', link: '/api/' },
          ]
        }
      ],
      '/ui/': [
        {
          text: 'UI',
          items: [
            { text: '目录', link: '/ui/' },
          ]
        }
      ],
      '/module/': [
        {
          text: '程序模块',
          items: [
            { text: '目录', link: '/module/' },
          ]
        }
      ],
      '/case/': [
        {
          text: '业务场景',
          items: [
            { text: '目录', link: '/case/' },
          ]
        }
      ],
      '/tool/': [
        {
          text: '工具',
          items: [
            { text: '目录', link: '/tool/' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/markdown-lang/docs' }
    ]
  }
})
