import { Button, Center, Flex } from "@chakra-ui/react";
import React from "react";

const Pagination = ({
    destinationsPerPage,
    totalDestinations,
    paginate,
    currentPage,
}) => {
    const pageNumbers = [];

    for (
        let i = 1;
        i <= Math.ceil(totalDestinations / destinationsPerPage);
        i++
    ) {
        pageNumbers.push(i);
    }

    return (
        <Center py={10}>
            <Flex>
                {pageNumbers.map((number) => (
                    <Button
                        onClick={() => paginate(number)}
                        m={2}
                        colorScheme="teal"
                        variant={currentPage === number ? "solid" : "outline"}
                        key={number}
                    >
                        {number}
                    </Button>
                ))}
            </Flex>
        </Center>
    );
};

export default Pagination;
