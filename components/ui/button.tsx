import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                bhfs: "bg-background hover:bg-[var(--custom-grey)] text-[var(--grey-fg)]",
                default:
                    "bg-primary text-primary-foreground",
                destructive:
                    "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline:
                    "border border-[var(--button-bg)] bg-background hover:bg-[var(--blue-bg)]",
                secondary:
                    "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
                blue: "bg-[var(--button-bg)] text-white hover:bg-[#1772ebde]",
                theme: "bg-[#edf5fd] dark:bg-[#494D50]",
                icon: "bg-transparent w-fit h-fit",
                sidebar: "bg-background hover:bg-[#f2f5f7] text-center text-[var(--grey-fg)] hover:text-foreground hover:font-semibold",
                selected: "bg-[var(--custom-grey)] font-semibold bg-background"
            },
            size: {
                default: "h-8 px-3 py-2 rounded-[6px]",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
                myIcon: "h-full w-fit px-2 rounded-[0px]",
                mySize: "h-full w-fit px-2 rounded-[0px]",
                round: "h-fit w-fit py-2 px-3 rounded-[16px]",
                sidebar: "w-full py-3 px-4 rounded-l-md"
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false , ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
