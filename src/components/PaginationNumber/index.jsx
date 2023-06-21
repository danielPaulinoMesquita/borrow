import React from 'react';
import {Box, Button, HStack} from "@chakra-ui/react";

const PaginationNumber = ({objectsPerPage, totalPage, paginate}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPage / objectsPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <Box p='4' display='flex' justifyContent='center'>
            <HStack spacing={6}>
                {pageNumbers.map((number) => {
                    return (
                        <Button key={number} onClick={() => paginate(number)}>{number}</Button>
                    )
                })}
            </HStack>
        </Box>

    )
}

export default PaginationNumber;