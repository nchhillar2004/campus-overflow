import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { Button } from "../ui/button";

export default function UserProfileCard(props: {
    fname: string;
    image: string | StaticImport;
    banner: string | StaticImport;
    username: string;
    role: string;
    time: string;
    email: string;
    verified: boolean;
    isOwner: boolean;
}) {
    return (
        <section className="pb-4">
            <div className="rounded-md h-full min-h-[70vh]">
                <Image
                    src={props.banner}
                    width={1600}
                    height={500}
                    alt="Banner"
                />
                <div className="flex flex-col lg:flex-row relative z-1 top-0 lg:-top-[11rem] h-[60%] w-full lg:justify-between lg:w-[96%] m-auto">
                    <div className="left w-full lg:w-[80%]">
                        <div className="usercard flex-col lg:flex-row lg:items-start w-full ">
                            <Image
                                src={props.image}
                                height={120}
                                width={120}
                                alt={`${props.fname} profile pic`}
                                className="lg:w-[200px] lg:h-[200px] mr-4 mb-4"
                            />
                            <div className="flex flex-col">
                                <span>
                                    {props.verified ? (
                                        <div className="flex items-center">
                                            <h1 className="font-[24px] mr-1">
                                                {props.fname}
                                            </h1>
                                            <Image
                                                src="/verified.png"
                                                width={20}
                                                height={20}
                                                alt="Verified user"
                                            />
                                        </div>
                                    ) : (
                                        <h1 className="font-[24px]">
                                            {props.fname}
                                        </h1>
                                    )}
                                </span>
                                <p>@{props.username}</p>
                                <p>{props.email}</p>
                                <p>{props.role}</p>
                                <time>{props.time}</time>
                            </div>
                        </div>
                    </div>

                    <div className="right w-full lg:w-[18%]">
                        {props.isOwner ? (
                            <div className="usercard w-full flex-col lg:items-start">
                                <h1>Verification</h1>
                                <Separator />
                                {props.verified ? (
                                    <div className="flex flex-col w-full text-center items-center">
                                        <Image
                                            src="/verified.png"
                                            width={180}
                                            height={150}
                                            alt="Verified"
                                            className="py-4 px-6"
                                        />
                                        <p>Already verified</p>
                                    </div>
                                ) : (
                                    <div className="flex flex-col w-full items-center">
                                        <Image
                                            src="https://www.f-cdn.com/assets/main/en/assets/profile/certifications.svg"
                                            width={180}
                                            height={150}
                                            alt="Verification"
                                            className="py-4 px-6"
                                        />
                                        <Link
                                            href="/services/verify"
                                            
                                            className="p-2 text-center border rounded w-full"
                                        >
                                            Get Verified
                                        </Link>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="usercard flex-col justify-between w-full">
                                <h1>Contact</h1>
                                <Separator />
                                <h1>{props.fname}</h1>
                                <Button>Message</Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
