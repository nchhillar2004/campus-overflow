"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import Link from "next/link";
import toast from "react-hot-toast";
import { EyeIcon, EyeOffIcon } from "lucide-react";
const FormSchema = z.object({
    username: z
        .string()
        .min(1, {
            message: "Username cannot be empty.",
        })
        .min(3, {
            message: "Invalid username.",
        })
        .max(16, {
            message: "Invalid username.",
        })
        .refine((data) => /^[a-z](?:[-a-z0-9]*[a-z0-9])?$/i.test(data), {
            message: "Invalid username.",
        }),
    password: z
        .string()
        .min(8, {
            message: "Wrong password",
        })
        .refine((data) => data.trim() !== "", {
            message: "Password cannot be empty.",
        }),
});

export function LoginForm() {
    const [showPassword, setShowPassword] = React.useState(false);
    const router = useRouter();

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof FormSchema>) => {
        const username = values.username;
        const password = values.password;
        try {
            const res = await signIn("credentials", {
                redirect: false,
                username,
                password,
            });
            if (res?.status === 401) {
                toast.error("User not found.");
            }
            if (res?.error) {
                if (res?.url) router.replace("/");
            } else {
                console.log(res?.error);
            }
        } catch (error) {}
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full space-y-4"
            >
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field, fieldState }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Enter your username"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage>
                                {fieldState?.error?.message}
                            </FormMessage>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="password"
                    render={({ field, fieldState }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <div className="relative flex items-center">
                                    <Input
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        placeholder="Enter your password"
                                        {...field}
                                    />
                                    {showPassword ? (
                                        <EyeIcon
                                            size={18}
                                            className="absolute cursor-pointer right-3 top-1/2 transform -translate-y-1/2 text-gray-500 z-10 bg-background"
                                            onClick={() => {
                                                showPassword
                                                    ? setShowPassword(false)
                                                    : setShowPassword(true);
                                            }}
                                        />
                                    ) : (
                                        <EyeOffIcon
                                            size={18}
                                            className="absolute cursor-pointer right-3 top-1/2 transform -translate-y-1/2 text-gray-500 z-10 bg-background"
                                            onClick={() => {
                                                showPassword
                                                    ? setShowPassword(false)
                                                    : setShowPassword(true);
                                            }}
                                        />
                                    )}
                                </div>
                            </FormControl>
                            <FormMessage>
                                {fieldState?.error?.message}
                            </FormMessage>
                        </FormItem>
                    )}
                />

                <div className="flex flex-col space-y-2 items-center">
                    <Button variant="blue" size="auth" type="submit">
                        Login
                    </Button>
                    <p className="text-[var(--grey-fg)]">OR</p>
                    <Button variant="blue" size="auth" type="button" asChild>
                        <Link href="/auth/register">Register</Link>
                    </Button>
                </div>
            </form>
        </Form>
    );
}
