import { Box, SimpleGrid } from "@chakra-ui/react";
import React, { useContext } from "react";
import { authContext } from "../../context/auth/auth-context";
import DestinationCard from "../Destination/DestinationCard";
import MiniHero from "../UI/MiniHero";

const FavoriteList = () => {
    const { userData } = useContext(authContext);

    if (userData.favorites === undefined) {
        return (
            <MiniHero
                heading={"Start Your Adventure Now"}
                subheading={"Sign In to See Your Favorites 🚀"}
            />
        );
    }

    if (userData.favorites.length === 0) {
        return (
            <MiniHero
                heading={"You Don't Have Any Favorites Yet"}
                subheading={"Start Exploring 🚀"}
            />
        );
    }

    return (
        <section>
            <div className="layout my-5">
                <SimpleGrid minChildWidth="280px" spacing="40px">
                    {userData.favorites.map((dest) => (
                        <Box key={dest._id}>
                            <DestinationCard
                                key={dest._id}
                                id={dest.id}
                                title={dest.title}
                                image={dest.image}
                                location={dest.location}
                            />
                        </Box>
                    ))}
                </SimpleGrid>
            </div>
        </section>
    );
};

export default FavoriteList;
