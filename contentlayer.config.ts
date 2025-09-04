import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    date: { type: 'date', required: true },
    tags: { type: 'list', of: { type: 'string' } },
    published: { type: 'boolean', default: true }
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, '')
    },
    url: { type: 'string', resolve: (doc) => `/posts/${doc._raw.flattenedPath.replace('posts/', '')}` }
  }
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post]
});
