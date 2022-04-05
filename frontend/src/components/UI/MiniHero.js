import { Box, Center, Heading, Text } from "@chakra-ui/react";
import { IoEarthOutline } from "react-icons/io5";

const MiniHero = ({ heading, subheading }) => {
    return (
        <Box textAlign="center" py={10} px={6}>
            <Center>
                <IoEarthOutline size={"80px"} />
            </Center>

            <Heading
                as="h2"
                size="xl"
                mt={6}
                mb={5}
                bgGradient="linear(to-r, teal.400, teal.600)"
                backgroundClip="text"
            >
                {heading}
            </Heading>
            <Text color={"gray.500"}>{subheading}</Text>
        </Box>
    );
};

export default MiniHero;
