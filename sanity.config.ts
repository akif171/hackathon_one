import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './schemas'
import { visionTool } from "@sanity/vision"

export default defineConfig({
    name: 'default',
    title: 'Hackathon Sanity Studio',
    projectId: 'kl2gni8n',
    dataset: 'production',

    plugins: [deskTool(), visionTool()],
    basePath: "/studio",

    schema: {
        types: schemaTypes,
    },
})
