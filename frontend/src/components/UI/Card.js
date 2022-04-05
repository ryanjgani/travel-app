import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    useColorModeValue,
    Button,
    Tooltip,
    Flex,
    HStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../../context/auth/auth-context";

import { TiWeatherPartlySunny } from "react-icons/ti";

export default function DestinationItemDesc({ destination }) {
    const [weather, setWeather] = useState({ value: 0, desc: "" });

    const { title, location, likes, geometry, image, _id } = destination;
    const APIkey = "bfb8608d2a8ed9f4e128ed8397ce8a8c";
    useEffect(() => {
        const getWeather = async () => {
            const res = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${geometry.coordinates[1]}&lon=${geometry.coordinates[0]}&appid=${APIkey}`
            );
            setWeather({
                value: Math.round(res.data.main.temp - 273.15),
                desc: res.data.weather[0].description,
            });
        };
        getWeather();
    }, [geometry]);

    const { userData, addFavorite, removeFavorite, itemIsFavoriteHandler } =
        useContext(authContext);

    let isSignedIn = Object.keys(userData).length > 0;

    const itemIsFavorite = isSignedIn ? itemIsFavoriteHandler(_id) : null;

    const toggleFavoriteButton = () => {
        itemIsFavorite ? removeFavorite(_id) : addFavorite(_id);
    };

    return (
        <Center>
            <Box
                // maxW={"445px"}
                w={"full"}
                bg={useColorModeValue("white", "gray.900")}
                boxShadow={"2xl"}
                rounded={"lg"}
                p={6}
                overflow={"hidden"}
            >
                <Stack>
                    <Stack spacing={4}>
                        <Text
                            textTransform={"uppercase"}
                            color={"blue.400"}
                            fontWeight={600}
                            fontSize={"sm"}
                            alignSelf={"flex-start"}
                            rounded={"md"}
                        >
                            Destination
                        </Text>
                        <Heading>{title}</Heading>
                        <Text color={"gray.500"} fontSize={"lg"}>
                            {location.city}, {location.country}
                        </Text>
                        <Text>Likes: {itemIsFavorite ? likes + 1 : likes}</Text>
                    </Stack>
                    <Tooltip
                        label="Log in to add to favorites!"
                        shouldWrapChildren
                        isDisabled={isSignedIn ? true : false}
                    >
                        <Flex justifyContent={"space-between"}>
                            <Box>
                                <Button
                                    my={2}
                                    colorScheme="pink"
                                    variant={
                                        itemIsFavorite ? "outline" : "solid"
                                    }
                                    onClick={toggleFavoriteButton}
                                    isDisabled={!isSignedIn}
                                >
                                    {itemIsFavorite
                                        ? "Added to Favorites"
                                        : "Add to Favorites"}
                                </Button>
                            </Box>

                            <Box>
                                <HStack my="4">
                                    <TiWeatherPartlySunny />
                                    <Text my={2} color={"green.500"}>
                                        {weather.value}°C{" "}
                                        {weather.desc.toLocaleUpperCase()}
                                    </Text>
                                </HStack>
                            </Box>
                        </Flex>
                    </Tooltip>
                </Stack>
            </Box>
        </Center>
    );
}
