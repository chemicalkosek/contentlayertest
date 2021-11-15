import { defineDocumentType, makeSource } from 'contentlayer/source-files'
// import highlight from 'rehype-highlight'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date' },
  },
}))

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  markdown: { rehypePlugins: [] },
})