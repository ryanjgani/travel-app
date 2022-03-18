import { Center, Heading } from "@chakra-ui/react";
import React from "react";
import FavoriteList from "../components/Favorite/FavoriteList";

const Favorites = () => {
    return (
        <div>
            <Center my={5}>
                <Heading>Favorites</Heading>
            </Center>
            <FavoriteList />
        </div>
    );
};

export default Favorites;
