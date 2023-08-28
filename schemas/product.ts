import { defineField } from "sanity";

const product = {
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string",
            validation: (rule) => rule.required()
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name"
            }
        }),
        defineField({
            name: "category",
            title: "Category",
            type: "string",
        }),
        {
            name: "productImage",
            title: "Product Image",
            type: 'array',
            of: [
                {
                    type: 'image',
                },
                {
                    title: 'URL',
                    name: 'urlObject',
                    type: 'object',
                    fields: [
                        {
                            title: 'URL',
                            name: 'urlField',
                            type: 'url'
                        }
                    ]
                }
            ]



        },
        defineField({
            name: "tag",
            title: "Tag",
            type: "string",
            description: "add tag like male, female, kids, etc. in small case",
            validation: (rule) => rule.required()
        }),
        defineField({
            name: "price",
            title: "Price",
            type: "number",
            validation: (rule) => rule.required()
        }),

    ]
}

export default product