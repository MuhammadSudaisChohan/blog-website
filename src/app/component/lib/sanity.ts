import { createClient } from "next-sanity";
import imageUrlBulder from "@sanity/image-url"

export const client=createClient({
    apiVersion:'2023-05-03',
    dataset:'production',
    projectId:'7pr3cby0',
    useCdn:false,
})

const builder=imageUrlBulder(client)
export function urlFor(source:any) {
    return builder.image(source)
}