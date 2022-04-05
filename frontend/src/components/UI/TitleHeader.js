import { Heading } from "@chakra-ui/react";
import React from "react";

const TitleHeader = ({ children }) => {
    return (
        <Heading
            my={5}
            color={"#2A2C46"}
            fontWeight={1000}
            fontFamily={"Inter"}
            fontSize={{ base: "2xl", sm: "4xl", md: "5xl" }}
            lineHeight={"110%"}
        >
            {children}
        </Heading>
    );
};

export default TitleHeader;
