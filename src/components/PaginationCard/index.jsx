import React from "react";
import {Box} from "@chakra-ui/react";
import ComponentCard from "../Card";
import PaginationNumber from "../PaginationNumber";


export const Pagination = ({current, totalPage, loading, objectsPerPage, paginate}) => {

    const paginating = (number) => {
        paginate(number);
    }

    return (
        <Box>
            <ComponentCard objects={current} loading={loading}/>
            <PaginationNumber paginate={paginating} totalPage={totalPage} objectsPerPage={objectsPerPage}/>
        </Box>
    )
}

export default Pagination;