import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";

import MicIcon from "../assets/mic.svg";
import ImageIcon from "../assets/image.svg";

const SearchInput = () => {

    const { query } = useParams();
    // here query is after / from url when we enter for our result than where is the searchQuery used it shows the text of query instead of "" in searchresult.
    // hooks are being used to define variable in the react js
    const [searchQuery, setSearchQuery] = useState(query || "");
    const navigate = useNavigate();

    const searchQueryHandler = (event) => {
        if (event?.key === "Enter" && searchQuery?.length > 0) {

            //startindex is always 1.
            navigate(`/${searchQuery}/${1}`);
        }
    };

    return (
        <div
            id="searchBox"
            className="h-[46px] w-full md:w-[584px] flex items-center gap-3 px-4 border border-[#dfe1e5] rounded-3xl hover:bg-white hover:shadow-c hover:border-0 focus-within:shadow-c focus-within:border-0"
            // focus-within means that the click ia already on the search bar and the | is blinking due to autofocus.
        >
            <AiOutlineSearch size={18} color="#9aa0a6" />
            <input
                type="text"
                // e is the text that we type in the search bar.
                onChange={(e) => setSearchQuery(e.target.value)}
                // onKeyUp={(e) => console.log(e.target.value)} basically it write the text in frontend.
                // h he hel hell hello hello! if we us backspace hello hell hel he h
                onKeyUp={searchQueryHandler}
                value={searchQuery}
                // basically autofocus is used when we load and cursor is already blinking
                autoFocus
                className="grow outline-0 text-black/[0.87]"
            />
            <div className="flex items-center gap-3">
                {/* when you right something and some value/img/icons is come than u can use below way to toggle those. */}
                {searchQuery && (
                    <IoMdClose
                        size={24}
                        color="#70757a"
                        className="cursor-pointer"
                        onClick={() => setSearchQuery("")}
                    />
                )}
                <img className="h-6 w-6 cursor-pointer" src={MicIcon} alt="" />
                <img
                    className="h-6 w-6 cursor-pointer"
                    src={ImageIcon}
                    alt=""
                />
            </div>
        </div>
    );
};

export default SearchInput;
