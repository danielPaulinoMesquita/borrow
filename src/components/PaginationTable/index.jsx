import React from "react";
import {Box, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import PaginationNumber from "../PaginationNumber";

const PaginationTable = ({current, totalPage,  loading, objectsPerPage, paginate, columns}) => {

    if (loading) {
        return 'Loading ....'
    }

    return (
        <Box borderWidth='1px' borderColor='gray.200' rounded='md'>
            <TableContainer>
                <Table variant='striped'>
                    <TableCaption>
                    <PaginationNumber
                        paginate={paginate}
                        objectsPerPage={objectsPerPage}
                        totalPage={totalPage}/>
                    </TableCaption>
                    <Thead>
                        <Tr>
                            {columns.map(colum => {
                                return (
                                    <Th>{colum}</Th>
                                )
                            })}
                        </Tr>
                    </Thead>
                    <Tbody>
                        {current ? current.map(obj=>{
                                return(
                                    <Tr>
                                        <Td>{obj.id}</Td>
                                        <Td>{obj.nome}</Td>
                                        <Td>{obj.company}</Td>
                                        <Td>{obj.valor}</Td>
                                    </Tr>
                                )
                            }) :
                            <Box>
                                An error ocurred or not exists datas
                            </Box>
                        }

                    </Tbody>

                </Table>
            </TableContainer>
        </Box>
    )
}

export default PaginationTable;