import { Box, SimpleGrid } from "@chakra-ui/react";
import React, { useState } from "react";
import Search from "../UI/Search";
import DestinationCard from "./DestinationCard";

const DestinationList = ({ destinations }) => {
    const [text, setText] = useState("");

    return (
        <section>
            <div className="layout my-5">
                <Search getQuery={(q) => setText(q)} />

                <SimpleGrid minChildWidth="280px" spacing="40px">
                    {destinations.map((dest) => (
                        <Box key={dest._id}>
                            <DestinationCard
                                key={dest._id}
                                id={dest._id}
                                title={dest.title}
                                location={dest.location}
                                likes={dest.likes}
                                image={dest.image}
                                coordinates={dest.geometry.coordinates}
                            />
                        </Box>
                    ))}
                </SimpleGrid>
            </div>
        </section>
    );
};

export default DestinationList;
