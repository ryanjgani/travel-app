import { Input, InputGroup, InputLeftElement, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

const Search = (props) => {
    const [text, setText] = useState("");

    const onChange = (q) => {
        setText(q);
        props.getQuery(q);
    };

    return (
        <Stack spacing={4}>
            <InputGroup>
                <InputLeftElement
                    pointerEvents="none"
                    children={<BsSearch color="gray.300" />}
                />
                <Input
                    type="text"
                    placeholder="Search"
                    _placeholder={{ opacity: 1, color: "gray.500" }}
                    onChange={onChange}
                />
            </InputGroup>
        </Stack>
    );
};

export default Search;
