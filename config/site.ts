const isProduction = process.env.NODE_ENV === "production";
const productionUrl = "https://nextjs-finance-app-lake.vercel.app";

const SiteConfig = {
    title: "Campus Overflow",
    shortTitle: "campusOverflow",
    description: "Open source Q&A website by the students for the students.",
    url: isProduction ? productionUrl : "http://localhost:3000",
    ogImage: `${productionUrl}/og.jpg`,
    links: {
        github: "https://github.com/nchhillar2004/",
        discord: "https://discord.com/",
    },
};

export default SiteConfig;
