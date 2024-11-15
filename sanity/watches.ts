
export const watches = {
    name:'watches',
    type:'document',
    title:'Watches',
    fields:[
        {
            name: 'pname',
            type:'string',
            title:'Product Name'
        },
        {
            name: 'pdesc',
            type:'text',
            title:'Product Description'
        },
        {
            name: 'pprice',
            type:'string',
            title:'Product Price'
        },
        {
            name: 'pquan',
            type:'string',
            title:'Product Quantity'
        },
        {
            name: 'brand',
            type:'string',
            title:'Brand'
        },
        {
            name: 'category',
            type:'reference',
            title:'Product Category',
            to:[
                {
                    type:'categories'
                }
            ]
        },
        {
            name:'images',
            type:'array',
            title:'Product Images',
            of:[
                {
                    name:'image1',
                    type:'image',
                    title:'Image 1'
                },
                {
                    name:'image2',
                    type:'image',
                    title:'Image 2'
                },
                {
                    name:'image3',
                    type:'image',
                    title:'Image 3'
                },
                {
                    name:'image4',
                    type:'image',
                    title:'Image 4'
                },
            ]
        }
    ]
}