import { Box, Input } from "@chakra-ui/react";
import React, { useState } from "react";

const Search = (props) => {
    const [text, setText] = useState("");

    const onChange = (q) => {
        setText(q);
        props.getQuery(q);
    };

    return (
        <Box mb={5}>
            <form>
                <Input
                    type="text"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Search..."
                    value={text}
                    onChange={(e) => onChange(e.target.value)}
                    autoFocus
                />
            </form>
        </Box>
    );
};

export default Search;
