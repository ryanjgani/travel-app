import { Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import {
    Box,
    Center,
    Heading,
    Stack,
    Link,
    useColorModeValue,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";

const MapPopup = ({ popupInfo }) => {
    return (
        <Center>
            <Box
                w={"full"}
                bg={useColorModeValue("white", "gray.900")}
                boxShadow={"2xl"}
                rounded={"md"}
                p={6}
                overflow={"hidden"}
            >
                <Box bg={"gray.100"} mt={-6} mx={-6} mb={6} pos={"relative"}>
                    <Image src={popupInfo.image} layout={"fill"} />
                </Box>
                <Stack>
                    <Link
                        outline="none"
                        rounded={"md"}
                        _focus="true"
                        textDecoration="none"
                        _hover={{
                            textDecoration: "none",
                        }}
                        as={ReactLink}
                        to={`/destinations/${popupInfo.id}`}
                    >
                        <Heading
                            color={useColorModeValue("gray.700", "white")}
                            fontSize={"2xl"}
                            fontFamily={"body"}
                            _hover={{ color: "green" }}
                        >
                            {popupInfo.title}
                        </Heading>
                    </Link>

                    <Text fontFamily={"body"}>
                        {popupInfo.city}, {popupInfo.country}
                    </Text>
                </Stack>
            </Box>
        </Center>
        // <div>
        //     <h3>{popupInfo.title}</h3>

        //     <Text>
        //         {popupInfo.city}, {popupInfo.country}
        //     </Text>

        //     <img alt="map" src={popupInfo.image} />
        //     <Link to={`/destinations/${popupInfo.id}`}>
        //         <Button colorScheme="blue">View</Button>
        //     </Link>
        // </div>
    );
};

export default MapPopup;
