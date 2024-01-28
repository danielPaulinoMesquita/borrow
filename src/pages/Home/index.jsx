import React, {useEffect, useState} from 'react';
import {Box, Button, Heading, Stack, Wrap, WrapItem} from "@chakra-ui/react";
import Pagination from "../../components/PaginationCard/index";
import PaginationTable from "../../components/PaginationTable";
import Categories from '../../assets/mocks/categories.json';
import Companies from '../../assets/mocks/companies.json';
import {ProductAPI} from "../../apis/ProductAPI";

export const Home = () => {

    const [companies, setCompanies] = useState([]);
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [columns, setColumns] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentPageTable, setCurrentPageTable] = useState(1);
    const [objectsPerPage] = useState(5);

    useEffect(() => {
        setLoading(true);


        // todo mock
        const categories = JSON.parse(JSON.stringify(Categories));
        const companies = JSON.parse(JSON.stringify(Companies));
        // const products = JSON.parse(JSON.stringify(Products));

        setCategories(categories);
        setCompanies(companies);
        ProductAPI.getAll().then(response => {
            setProducts(response)
        }).catch(error => {
            console.log(error)
        })

      //  setProducts(products);
        setColumns(['ID', 'TYPE', 'DAYS', 'IMAGE'])

        setLoading(false)


    }, []);

    // Get current props cards
    const indexOfLast = currentPage * objectsPerPage;
    const indexOfFirst= indexOfLast - objectsPerPage;
    const current = companies.slice(indexOfFirst, indexOfLast);

    // Get current props table
    const indexOfLastTable = currentPageTable * objectsPerPage;
    const indexOfFirstTable= indexOfLastTable - objectsPerPage;
    const currentTable = products.slice(indexOfFirstTable, indexOfLastTable);


    // change page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const paginateTable = (pageNumber) => {
        setCurrentPageTable(pageNumber);
    }

    return (
        <>
            <Box>
                <Box>
                    <Heading fontSize='lg'>Empresas</Heading>
                    <Box p='5'>
                        <Pagination
                            current={current}
                            totalPage={companies.length}
                            objectsPerPage={objectsPerPage}
                            loading={loading}
                            paginate={paginate}/>
                    </Box>
                </Box>

                <Box>
                    <Heading fontSize='lg'>Categorias</Heading>
                    <Box p='9'>
                        <Stack direction='column'>
                            <Wrap spacing='3'>
                                {categories.map(cat => {
                                    return (
                                        <WrapItem key={cat.id}>
                                            <Button backgroundColor={cat.color}>{cat.name}</Button>
                                        </WrapItem>
                                    )
                                })}
                            </Wrap>
                        </Stack>
                    </Box>
                </Box>

                <Box>
                    <Heading fontSize='lg'>Produtos</Heading>
                    <Box p='4'>
                        <PaginationTable
                            current={currentTable}
                            totalPage={products.length}
                            loading={loading}
                            objectsPerPage={objectsPerPage}
                            paginate={paginateTable}
                            columns={columns}/>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

