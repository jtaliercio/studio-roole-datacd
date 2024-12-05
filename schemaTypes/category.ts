import {defineField, defineType} from 'sanity'

export const categoryType = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({ 
      name: 'slug',
       type:'slug', 
      options: {source: 'name'}
      }), 
  defineField({
    name: 'rubrique',
    type: 'reference',
    to: [{type: 'category'}],
  }),
  ],
})