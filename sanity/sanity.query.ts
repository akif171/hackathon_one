import { groq } from "next-sanity";
import client from "./sanity.client";
import { Product } from "../types";


export async function getProducts(): Promise<Product[]> {
    return client.fetch(
        groq`*[_type == "product"]{
            _id,
            name,
            "slug":slug.current,
            category,
            "productImage":productImage[].asset->url,  
            tag,
            price
          }
        `
    )
}

export async function getHomeProducts(): Promise<Product[]> {
    return client.fetch(
        groq`*[_type == "product"]{
            _id,
            name,
            "slug":slug.current,
            category,
            "productImage":productImage[].asset->url,  
            tag,
            price
          }[0...3]
        `
    )
}

export async function getSingleProduct(slug: string): Promise<Product[]> {
    return client.fetch(
        groq`*[_type == "product" && slug.current == $slug][0]{
            _id,
            name,
            "slug":slug.current,
            category,
            "productImage":productImage[].asset->url,  
            tag,
            price
          }
        `, { slug }
    )
}


export async function getFemaleProducts(): Promise<Product[]> {
    return client.fetch(
        groq`*[_type == "product" && tag == "female"]{
            _id,
            name,
            "slug": slug.current,
            category,
            "productImage": productImage[].asset->url,  
            tag,
            price
          }
`
    )
}


export async function getMaleProducts(): Promise<Product[]> {
    return client.fetch(
        groq`*[_type == "product" && tag == "male"]{
  
            _id,
            name,
            "slug": slug.current,
            category,
            "productImage": productImage[].asset->url,  
            tag,
            price
          }
`
    )
}

export async function getKidsProducts(): Promise<Product[]> {
    return client.fetch(
        groq`*[_type == "product" && tag == "kids"]{
  
            _id,
            name,
            "slug": slug.current,
            category,
            "productImage": productImage[].asset->url,  
            tag,
            price
          }
`
    )
}