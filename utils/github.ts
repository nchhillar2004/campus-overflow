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
            `/repos/nchhillar2004/campus-overflow/deployments`
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching deployments:", error);
    }
};

export const getCommits = async () => {
    try {
        const response = await githubAPI.get(
            `/repos/nchhillar2004/campus-overflow/commits`
        );

        return response.data;
    } catch (error) {
        console.error("Error fetching commits:", error);
    }
};

export const getLatestVersion = async () => {
    try {
        const response = await githubAPI.get(
            `/repos/nchhillar2004/campus-overflow/releases/latest`
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching latest version:", error);
    }
};
