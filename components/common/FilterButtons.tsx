import React from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export default function FilterButtons() {
    return (
        <div className="filter flex w-full items-center justify-end mt-4 py-4">
            <div className="filter-buttons h-[34px] flex border items-center rounded-md">
                <Button variant="filter" size="filter" className="rounded-s-md">
                    All
                </Button>
                <Separator orientation="vertical" />
                <Button variant="filter" size="filter">
                    Popular
                </Button>
                <Separator orientation="vertical" />
                <Button variant="filter" size="filter">
                    Week
                </Button>
                <Separator orientation="vertical" />
                <Button variant="filter" size="filter" className="rounded-e-md">
                    Month
                </Button>
            </div>
        </div>
    );
}
