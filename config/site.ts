const isProduction = process.env.NODE_ENV === 'production';
const productionUrl = 'https://nextjs-finance-app-lake.vercel.app';

const SiteConfig = {
    title: "Baba haridas financial services",
    shortTitle: "BHFS",
    description: "Helping you with money matters through a user-friendly website - simple, effective, and just for you",
    url: isProduction ? productionUrl : 'http://localhost:3000',
    ogImage: `${productionUrl}/og.jpg`,
    links: {
        github: "https://github.com/nchhillar2004/",
        discord: "https://discord.com/",
    }
}

export default SiteConfig;