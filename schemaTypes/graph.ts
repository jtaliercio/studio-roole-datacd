import {defineField, defineType} from 'sanity'

export const graphType = defineType({
  name: 'graph',
  title: 'Graph',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
defineField({ 
    name: 'slug',
     type:'slug', 
    options: {source: 'title'}
    }), 
defineField({
    name: 'image',
    type: 'image',
  }), 
defineField({
    name: 'description',
    type: 'array',
    of: [{type: 'block'}],
  }),
  defineField({
    name: 'rubrique',
    type: 'reference',
    to: [{type: 'category'}],
  }),
  ],
})