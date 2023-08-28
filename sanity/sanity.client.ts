import { type ClientConfig, createClient, } from "next-sanity";

const config: ClientConfig = {
    projectId: 'kl2gni8n',
    dataset: 'production',
    apiVersion: "2023-08-27",
    useCdn: true
}

const client = createClient(config)

export default client