import React from "react";
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
    const handleSearch = (e: any) => {
        e.preventDefault();
        const value = e.target[0].value;
    };

    return (
        <div className="flex w-full">
            <form onSubmit={handleSearch} className="container">
                <div className="icon-container fixed z-50 text-gray-500 top-2 w-fit h-fit py-[3px] px-1">
                <SearchIcon/>
                </div>
                <input type="text" placeholder="Search.." className="w-full py-1 rounded-md px-2 pl-[30px] text-[14px] border outline-[3px] outline-blue-400 border-[var(--black-225)]" autoComplete="off" />
            </form>
        </div>
    );
}
