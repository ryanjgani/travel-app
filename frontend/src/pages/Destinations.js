import React, { useContext, useEffect, useState } from "react";
import DestinationList from "../components/Destination/DestinationList";
import DestinationMap from "../components/Destination/map/DestinationMap.tsx";
import { destinationContext } from "../context/destination/destination-context";
import { Box, Center } from "@chakra-ui/react";
import TitleHeader from "../components/UI/TitleHeader";
import SyncLoader from "react-spinners/SyncLoader";
import Pagination from "../components/UI/Pagination";

const Destinations = () => {
    const { destinations, getAllDestinations } = useContext(destinationContext);
    const [isLoading, setIsLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [destinationsPerPage, setDestinationsPerPage] = useState(9);

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

    // Get current destinations
    const lastDestIndex = currentPage * destinationsPerPage;
    const firstDestIndex = lastDestIndex - destinationsPerPage;
    const currentDestinations = destinations.slice(
        firstDestIndex,
        lastDestIndex
    );

    // Change page
    const paginate = (pageNumber) => {
        window.scrollTo(0, 0);
        setCurrentPage(pageNumber);
    };

    const mapData = { type: "FeatureCollection", features: destinations };

    return (
        <div className="layout">
            <Center my={5}>
                <TitleHeader>Destinations</TitleHeader>
            </Center>
            {isLoading ? (
                <Center mt={5} className="content-center">
                    <SyncLoader color="#005CC5" loading={isLoading} size={20} />
                </Center>
            ) : destinations.length == 0 ? (
                <Center mt={5} className="content-center">
                    <h2>No Destinations found</h2>
                </Center>
            ) : (
                <Box>
                    <Box pb={10} mb={10}>
                        <DestinationList destinations={currentDestinations} />
                    </Box>
                    <Pagination
                        destinationsPerPage={destinationsPerPage}
                        totalDestinations={destinations.length}
                        paginate={paginate}
                        currentPage={currentPage}
                    />
                </Box>
            )}

            <Center py={5} borderRadius="xl" w={"100%"} mt={10}>
                <DestinationMap mapData={mapData} />
            </Center>
        </div>
    );
};

export default Destinations;
