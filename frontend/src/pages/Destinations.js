import React, { useContext, useEffect, useState } from "react";
import DestinationList from "../components/Destination/DestinationList";
import DestinationMap from "../components/Destination/map/DestinationMap.tsx";
import { destinationContext } from "../context/destination/destination-context";
import { Box, Heading, Center } from "@chakra-ui/react";

const Destinations = () => {
    const { destinations, getAllDestinations } = useContext(destinationContext);
    const [isLoading, setIsLoading] = useState(true);
    // const [filteredData, setFilteredData] = useState(destinations);

    useEffect(() => {
        try {
            (async () => {
                await getAllDestinations();
                setIsLoading(false);
            })();
        } catch (e) {
            console.log(e);
            setIsLoading(false);
        }
    }, []);

    const mapData = { type: "FeatureCollection", features: destinations };

    return (
        <div className="layout">
            <Center my={5}>
                <Heading>Destinations</Heading>
            </Center>
            <DestinationList destinations={destinations} />
            <Box borderRadius="xl" w="full">
                <DestinationMap mapData={mapData} />
            </Box>
        </div>
    );
};

export default Destinations;
