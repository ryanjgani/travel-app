import { Heading, HStack } from "@chakra-ui/react";
import React from "react";
import { IoEarthOutline } from "react-icons/io5";

const Logo = () => {
    return (
        <HStack>
            <IoEarthOutline size={40} />
            <Heading size={"lg"}>TRAVL</Heading>
        </HStack>
    );
};

export default Logo;
