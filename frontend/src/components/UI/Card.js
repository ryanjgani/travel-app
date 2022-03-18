import {
    Image,
    Box,
    Center,
    Heading,
    Text,
    Stack,
    useColorModeValue,
    useBoolean,
    Button,
    Tag,
    Tooltip,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { authContext } from "../../context/auth/auth-context";
import ToastButton from "./Toast";

export default function BlogPostWithImage({ destination }) {
    // const [itemIsFavorite, setitemIsFavorite] = useBoolean();
    // const [isSignedIn, setIsSignedIn] = useState(false);
    const { title, location, likes, coordinates, image, _id } = destination;

    const { userData, addFavorite, removeFavorite, itemIsFavoriteHandler } =
        useContext(authContext);

    let isSignedIn = Object.keys(userData).length > 0;
    console.log(isSignedIn);
    const itemIsFavorite = isSignedIn ? itemIsFavoriteHandler(_id) : null;
    console.log(itemIsFavorite);

    console.log("CARD", userData.favorites);
    const toggleFavoriteButton = () => {
        itemIsFavorite ? removeFavorite(_id) : addFavorite(_id);
    };

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
                    <Tooltip
                        label="Log in to add to favorites!"
                        shouldWrapChildren
                        isDisabled={isSignedIn ? true : false}
                        // mt="3"
                    >
                        <Button
                            colorScheme="pink"
                            variant={itemIsFavorite ? "outline" : "solid"}
                            onClick={toggleFavoriteButton}
                            isDisabled={!isSignedIn}
                        >
                            {itemIsFavorite
                                ? "Added to Favorites"
                                : "Add to Favorites"}
                        </Button>
                    </Tooltip>
                    {/* <Button
                        colorScheme="pink"
                        variant={itemIsFavorite ? "outline" : "solid"}
                        onClick={toggleFavoriteButton}
                        isDisabled={!isSignedIn}
                    >
                        {itemIsFavorite
                            ? "Added to Favorites"
                            : "Add to Favorites"}
                    </Button> */}

                    {/* <ToastButton
                        colorScheme="pink"
                        variant={itemIsFavorite ? "outline" : "solid"}
                        onClick={toggleFavoriteButton}
                        isDisabled={!isSignedIn}
                    >
                        {itemIsFavorite
                            ? "Added to Favorites"
                            : "Add to Favorites"}
                    </ToastButton> */}
                </Stack>
            </Box>
        </Center>
    );
}
