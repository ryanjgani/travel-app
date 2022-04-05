import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
import DestinationMap from "./map/DestinationMap.tsx";
import { destinationContext } from "../../context/destination/destination-context";
import DestinationItemDesc from "../UI/Card";
import NotFound from "../UI/NotFound";

import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Stack,
    Box,
    Center,
} from "@chakra-ui/react";

const DestinationItem = () => {
    const [isLoading, setIsLoading] = useState(true);

    const { error, destinationItem, getSingleDestination } =
        useContext(destinationContext);

    const { destId } = useParams();

    useEffect(() => {
        try {
            (async () => {
                await getSingleDestination(destId);
                setIsLoading(false);
            })();
        } catch (e) {
            console.log(e);
            setIsLoading(false);
        }
    }, [destId]);

    if (error) {
        return (
            <div>
                <NotFound />
            </div>
        );
    }

    if (isLoading) {
        return (
            <Center mt={5} className="content-center">
                <SyncLoader color="#005CC5" loading={isLoading} size={20} />
            </Center>
        );
    }

    return (
        <Container maxW={"5xl"} py={12}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <Stack>
                    <DestinationItemDesc destination={destinationItem} />
                    <Stack pt={2}>
                        <Image
                            borderRadius="xl"
                            src={destinationItem.image}
                            objectFit={"cover"}
                        />
                    </Stack>
                </Stack>

                <Flex>
                    <Box w={"100%"} h={"100%"}>
                        <DestinationMap destination={destinationItem} />
                    </Box>
                </Flex>
            </SimpleGrid>
        </Container>
    );
};

export default DestinationItem;
