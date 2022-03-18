import { Box, SimpleGrid } from "@chakra-ui/react";
import React, { useContext } from "react";
import { authContext } from "../../context/auth/auth-context";
import DestinationCard from "../Destination/DestinationCard";

const FavoriteList = () => {
    const { userData } = useContext(authContext);

    console.log(userData.favorites[0].location.city);

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
