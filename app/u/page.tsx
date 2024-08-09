import Link from "next/link";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import SiteConfig from "@/config/site";
import { TypographyH1 } from "@/components/typography";
import SidebarLayout from "@/components/sidebar-layout";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import FilterButtons from "@/components/common/FilterButtons";
import InfoCard from "@/components/notifications/InfoCard";
import { BadgeCheck } from "lucide-react";

interface User {
    name: String;
    _id: null | undefined | React.Key;
    username: String;
    role: String;
    profile: String;
    isVerified: Boolean;
    image: string | StaticImport;
    stars: String;
    posts: Array<string>;
}

const Users = async () => {
    const response = await fetch(`${SiteConfig.url}/api/getusers`, {
        cache: "no-cache",
    });

    if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
    }

    const data: User[] = await response.json();
    const userLength = data.length;

    return (
        <SidebarLayout selectedOption={"users"}>
            <div className="flex flex-col-reverse justify-between lg:flex-row h-full">
                <div className="left lg:w-3/4 rounded-md h-full">
                    <div className="flex  w-full items-center justify-between">
                        <TypographyH1 title={`${userLength} Users`} />
                        <Button variant="blue" asChild>
                            <Link href="/">Search</Link>
                        </Button>
                    </div>
                    <FilterButtons />
                    <div className="flex justify-between flex-wrap mt-5 max-md:flex-col max-md:space-x-1">
                        {data.map((user, index) => (
                            <li
                                key={index}
                                className="list-none p-1 w-[240px] max-md:w-full"
                            >
                                <div className="flex">
                                    <Image
                                        fetchPriority="high"
                                        src={user.image}
                                        width={48}
                                        height={48}
                                        alt={`${user.name}`}
                                        className="rounded-[4px] h-[48px] w-[48px] max-md:h-[40px] max-md:w-[40px]"
                                    />
                                    <div className="flex flex-col ml-2">
                                        {user.isVerified ? (
                                            <Link
                                                href={`/u/${user.username}`}
                                                className="text-[15px] leading-[15px] flex"
                                            >
                                                {user.name}
                                                <BadgeCheck
                                                    fill="var(--orange)"
                                                    stroke="white"
                                                    size={16}
                                                    strokeWidth={2}
                                                    className="ml-1"
                                                />
                                            </Link>
                                        ) : (
                                            <Link
                                                href={`/u/${user.username}`}
                                                className="text-[15px] leading-[15px]"
                                            >
                                                {user.name}
                                            </Link>
                                        )}
                                        <p className="text-sm text-[var(--custom-grey-fg)] my-1">
                                            @{user.username}
                                        </p>
                                        <div className="flex">
                                            <p className="text-sm mr-1">
                                                Stars: {user.stars}
                                            </p>
                                            <Separator
                                                orientation="vertical"
                                                className="text-black"
                                            />
                                            <p className="flex text-sm items-center ml-1">
                                                Posts: {user.posts?.length}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </div>
                </div>
                <div className="right lg:w-[22%] mb-4">
                    <InfoCard
                        heading="Features"
                        content="Users are by default aligned from most stars to least."
                    />
                </div>
            </div>
        </SidebarLayout>
    );
};

export default Users;
