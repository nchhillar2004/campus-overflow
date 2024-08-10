import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "Googlebot",
                allow: ["/"],
                disallow: "/products/",
            },
            {
                userAgent: ["Applebot", "Bingbot"],
                disallow: ["/"],
            },
        ],
        sitemap: "https://campusOverflow.web.app/sitemap.xml",
    };
}
