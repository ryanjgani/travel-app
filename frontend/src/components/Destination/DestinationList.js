import { Box, SimpleGrid } from "@chakra-ui/react";
import React, { useState } from "react";
import Search from "../UI/Search";
import DestinationCard from "./DestinationCard";

const DestinationList = ({ destinations }) => {
    const [text, setText] = useState("");

    return (
        <section>
            <div className="layout">
                <Search getQuery={(q) => setText(q.target.value)} />

                <SimpleGrid minChildWidth="280px" spacing="40px">
                    {destinations
                        .filter((val) => {
                            if (text === "") return val;
                            else if (
                                val.title
                                    .toLowerCase()
                                    .includes(text.toLowerCase()) ||
                                val.location.country
                                    .toLowerCase()
                                    .includes(text.toLowerCase())
                            ) {
                                return val;
                            }
                        })
                        .map((dest) => (
                            <Box
                                key={dest._id}
                                h={["100%", "100%", "100%", "100%", 320]}
                                // h={320}
                            >
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
