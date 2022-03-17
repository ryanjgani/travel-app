import {
    Image,
    Box,
    Center,
    Heading,
    Text,
    Stack,
    useColorModeValue,
} from "@chakra-ui/react";

export default function BlogPostWithImage({ destination }) {
    const { title, location, likes, coordinates, image, id } = destination;

    return (
        <Center py={6}>
            <Box
                maxW={"445px"}
                w={"full"}
                bg={useColorModeValue("white", "gray.900")}
                boxShadow={"2xl"}
                rounded={"md"}
                p={6}
                overflow={"hidden"}
            >
                <Box
                    h={"210px"}
                    bg={"gray.100"}
                    // mt={-6}
                    // mx={-6}
                    mb={6}
                    pos={"relative"}
                >
                    <Image borderRadius="base" src={image} layout={"fill"} />
                </Box>
                <Stack>
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
            </Box>
        </Center>
    );
}
