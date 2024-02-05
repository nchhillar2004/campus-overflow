import React from "react";

export default function SearchBar() {
    const handleSearch = (e: any) => {
        e.preventDefault();
        const value = e.target[0].value;
        console.log(value);
    };

    return (
        <div className="flex w-full">
            <form onSubmit={handleSearch} className="container">
                <input type="text" placeholder="Search.." className="w-full py-1 rounded-md px-2 pl-5 text-[14px] border outline-[3px] outline-blue-400 border-[var(--black-225)]" autoComplete="off" />
            </form>
        </div>
    );
}
