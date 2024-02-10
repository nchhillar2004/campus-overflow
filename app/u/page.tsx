import Link from "next/link";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import SiteConfig from "@/config/site";
import {
    TypographyH1,
    TypographyH2,
    TypographyP,
    TypographyList,
} from "@/components/typography";
import SidebarLayout from "@/components/sidebar-layout";
import { Dot, Star } from "lucide-react";

interface User {
    name: String;
    _id: null | undefined | React.Key;
    username: String;
    role: String;
    profile: String;
    isVerified: Boolean;
    image: string | StaticImport;
    stars: String;
}

const Users = async () => {
    const response = await fetch(`${SiteConfig.url}/api/getusers`, {
        cache: "no-cache",
    });

    if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
    }

    const data: User[] = await response.json();

    return (
        <SidebarLayout>
            <div>
                <section className="">
                    <div className="flex">
                        <TypographyH1 title="Users" />
                    </div>
                    <div className="flex justify-between flex-wrap">
                        {data.map((user) => (
                            <li
                                key={user._id}
                                className="list-none p-1 w-[240px]"
                            >
                                <div className="flex">
                                    <Image
                                        src={user.image}
                                        width={48}
                                        height={48}
                                        alt={`${user.name}`}
                                        className="rounded-[4px] h-[48px] w-[48px]"
                                    />
                                    <div className="flex flex-col ml-2">
                                        {user.isVerified ? (
                                            <Link
                                                href={`/u/${user.username}`}
                                                className="text-[15px] leading-[15px] flex"
                                            >
                                                {user.name}
                                                <Image
                                                    src="/verified.png"
                                                    height={16}
                                                    width={16}
                                                    alt="Verified"
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
                                            <p className="text-sm">
                                                {user.role}
                                            </p>
                                            <p className="flex items-center ml-1">
                                                <Dot
                                                    size={24}
                                                    strokeWidth={3}
                                                    color="yellow"
                                                />
                                                {user.stars}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </div>
                </section>
            </div>
        </SidebarLayout>
    );
};

export default Users;
