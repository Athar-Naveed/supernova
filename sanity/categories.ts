import { defineField,defineType } from "sanity";

export const categories = defineType({
    name:'categories',
    title:'Categories',
    type:'document',
    fields:[
        defineField(
            {
            name:'category',
            type:'string',
            title:'Category'
        },
        ),
        defineField(
            {
            name:'img',
            type:'image',
            title:'Image'
        },
        ),
    ]
})