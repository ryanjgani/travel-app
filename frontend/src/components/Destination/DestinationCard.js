import React from "react";
import {
    Image,
    Box,
    Center,
    Heading,
    Text,
    Stack,
    useColorModeValue,
    Button,
    Link,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";

const DestinationCard = (props) => {
    const { title, location, likes, coordinates, image, id } = props;
    return (
        <Center py={6}>
            <Box
                maxW={"445px"}
                w={"full"}
                maxH={"full"}
                bg={useColorModeValue("white", "gray.900")}
                boxShadow={"2xl"}
                rounded={"md"}
                p={6}
                overflow={"hidden"}
            >
                <Box
                    h={"full"}
                    // mt={-6}
                    // mx={-6}
                    mb={5}
                    // pos={"relative"}
                >
                    <Image borderRadius="base" src={image} layout={"fill"} />
                </Box>
                <Stack mb={5}>
                    <Text
                        color={"green.500"}
                        textTransform={"uppercase"}
                        fontWeight={800}
                        fontSize={"sm"}
                        letterSpacing={1.1}
                    >
                        Blog
                    </Text>
                    <Heading
                        color={useColorModeValue("gray.700", "white")}
                        fontSize={"2xl"}
                        fontFamily={"body"}
                    >
                        {title}
                    </Heading>
                    <Text color={"gray.500"}>
                        {location.city}, {location.country}
                    </Text>
                </Stack>
                <Link
                    px={2}
                    py={1}
                    rounded={"md"}
                    _hover={{
                        textDecoration: "none",
                        // bg: useColorModeValue("gray.200", "gray.700"),
                    }}
                    as={ReactLink}
                    to={`/destinations/${id}`}
                >
                    <Button colorScheme="blue">View</Button>
                </Link>
            </Box>
        </Center>
    );
};

export default DestinationCard;
