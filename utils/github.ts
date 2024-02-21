import axios from "axios";

const githubAPI = axios.create({
    baseURL: "https://api.github.com",
    headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
    },
});

export const getDeployments = async () => {
    try {
        const response = await githubAPI.get(
            `/repos/nchhillar2004/nextjs-finance-app/deployments`
        );

        return response.data;
    } catch (error) {
        console.error("Error fetching deployments:", error);
        throw error;
    }
};

export const getCommits = async () => {
    try {
        const response = await githubAPI.get(
            `/repos/nchhillar2004/nextjs-finance-app/commits`
        );

        return response.data;
    } catch (error) {
        console.error("Error fetching commits:", error);
        throw error;
    }
};

export const getLatestVersion = async () => {
    try {
        const response = await githubAPI.get(
            `/repos/nchhillar2004/nextjs-finance-app/releases/latest`
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching latest version:", error);
        throw error;
    }
};
