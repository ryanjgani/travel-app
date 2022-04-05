import { Box, Center } from "@chakra-ui/react";
import React from "react";
import FavoriteList from "../components/Favorite/FavoriteList";
import TitleHeader from "../components/UI/TitleHeader";

const Favorites = () => {
    return (
        <Box minH={"100vh"}>
            <Center my={5}>
                <TitleHeader>Favorites</TitleHeader>
            </Center>
            <FavoriteList />
        </Box>
    );
};

export default Favorites;
