import React from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
    const handleSearch = (e: any) => {
        e.preventDefault();
        const value = e.target[0].value;
    };

    return (
        <div className="flex w-full">
            <form onSubmit={handleSearch} className="container">
                <div className="relative flex items-center">
                    <SearchIcon className="absolute left-2 top-1/2 text-gray-500 bg-background transform -translate-y-1/2" />
                    <input
                        type="text"
                        placeholder="Search.."
                        className="w-full py-1 rounded-md px-2 pl-[30px] text-[14px] border outline-[3px] outline-blue-400 border-[var(--black-225)]"
                        autoComplete="off"
                    />
                </div>
            </form>
        </div>
    );
}
