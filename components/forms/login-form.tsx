"use client";
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

const FormSchema = z.object({
    username: z
        .string()
        .min(1, {
            message: "Username cannot be empty.",
        })
        .min(3, {
            message: "Username must be at least 3 characters.",
        })
        .max(16, {
            message: "Username must be at most 16 characters.",
        }),
    password: z
        .string()
        .min(1, {
            message: "Password cannot be empty.",
        })
        .min(8, {
            message: "Wrong password",
        })
        .refine((data) => data.trim() !== "", {
            message: "Password cannot be empty.",
        }),
});

export function LoginForm() {
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
                                <Input
                                    type="password"
                                    placeholder="Enter your password"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage>
                                {fieldState?.error?.message}
                            </FormMessage>
                        </FormItem>
                    )}
                />

                <div className="flex flex-col space-y-2 items-center">
                    <Button variant="blue" size='auth' type="submit">
                        Login
                    </Button>
                    <p className="text-[var(--grey-fg)]">OR</p>
                    <Button variant="blue" size='auth' type="button" asChild>
                        <Link href="/auth/register">Register</Link>
                    </Button>
                </div>
            </form>
        </Form>
    );
}
