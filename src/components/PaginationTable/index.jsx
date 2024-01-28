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
                                    <Th key={colum}>{colum}</Th>
                                )
                            })}
                        </Tr>
                    </Thead>
                    <Tbody>
                        {current ? current.map(obj=>{
                                return(
                                    <Tr key={obj.id}>
                                        <Td>{obj.id}</Td>
                                        <Td>{obj.type}</Td>
                                        <Td>{obj.days}</Td>
                                        <Td><img width={50} height={50} src={`data:image/jpeg;base64,${obj.imageData}`}/></Td>
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