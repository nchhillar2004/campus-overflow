import Link from "next/link";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import SiteConfig from "@/config/site";

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
        <section className="py-4">
        <div className="py-4 px-2 bg-white rounded-sm">
            <h1>Top users</h1>
            {data.map((user) => (
                <Link key={user._id} href={`/u/${user.username}`}>
                    <div key={user._id} className="flex p-3 mb-3 hover:dark:bg-slate-800 dark:bg-slate-900 border rounded-md bg-slate-100 hover:bg-slate-50">
                        <div className="left">
                            <Image src={user.image} width={32} height={32} alt="Profile pic" className="h-[30px] w-[30px] rounded-full"  />
                        </div>
                        <div className="right">
                        {user?.isVerified ? (
                            <div className="flex w-full">
                                <p className="mr-1">{user.name}</p>
                                <Image
                                    src="/verified.png"
                                    width={18}
                                    height={18}
                                    alt="Verified user"
                                    className="w-[20px] h-[20px]"
                                />
                            </div>
                        ) : (
                            <p>{user.name}</p>
                        )}
                        <p>@{user.username}</p>
                        <p>{user.role}</p>
                        <p>{user.stars} Stars</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
        </section>
    );
};

export default Users;
