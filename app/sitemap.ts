import { MetadataRoute } from "next";
import SiteConfig from "@/config/site";

const URL = SiteConfig.url;

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: `${URL}`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1,
        },
        {
            url: `${URL}/posts`,
            lastModified: new Date(),
            changeFrequency: "always",
            priority: 1,
        },
        {
            url: `${URL}/questions`,
            lastModified: new Date(),
            changeFrequency: "always",
            priority: 1,
        },
        {
            url: `${URL}/u`,
            lastModified: new Date(),
            changeFrequency: "always",
            priority: 1,
        },
        {
            url: `${URL}/products`,
            lastModified: new Date(),
            changeFrequency: "always",
            priority: 1,
        },
        {
            url: `${URL}/about`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${URL}/services`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: `${URL}/contact`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: `${URL}/terms`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: `${URL}/privacy`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: `${URL}/help`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: `${URL}/auth/login`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: `${URL}/auth/register`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: `${URL}/u/profile`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: `${URL}/u/profile/settings`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.5,
        },
    ];
}
