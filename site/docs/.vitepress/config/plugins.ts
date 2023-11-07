import MarkdownIt from 'markdown-it'
// import MarkdownItContainer from 'markdown-it-container'
import TableContainer from './table'
// import type { Token } from 'markdown-it'

const markdown: MarkdownIt = MarkdownIt({
  breaks: true
})

export const mdPlugin = (md: MarkdownIt) => {
  md.use(TableContainer)
  // md.use(MarkdownItContainer, 'demo', {
  //   validate(params) {
  //     return !!params.trim().match(/^demo\s*(.*)$/)
  //   },

  //   render(tokens: Token[], idx: number) {
  //     const m: RegExpMatchArray = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
  //     const description: string = m && m.length > 1 ? m[1] : ''

  //     if (tokens[idx].nesting === 1) {
  //       return `
  //         <f-sticky-card :open="false">
  //           <template #source>
  //             <f-button type="default">默认按钮</f-button>
  //             <f-button type="primary">主要按钮</f-button>
  //             <f-button type="danger">危险按钮</f-button>
  //             <f-button type="warning">警告按钮</f-button>
  //           </template>
  //           ${encodeURIComponent(markdown.render(description))}
  //         `
  //     } else {
  //       return '</f-sticky-card>'
  //     }
  //   },
  //   // highlight(str, lang) {
  //   //   if (lang && hljs.getLanguage(lang)) {
  //   //     try {
  //   //       return '<pre class="hljs"><code>' +
  //   //         hljs.highlight(lang, str, true).value +
  //   //         '</code></pre>';
  //   //     } catch (__) { }
  //   //   }

  //   //   return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
  //   // }
  // })
}
