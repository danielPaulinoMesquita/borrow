import React, {useEffect, useState} from 'react';
import {Box, Button, Heading, Stack, Wrap, WrapItem} from "@chakra-ui/react";
import Pagination from "../../components/PaginationCard/index";
import PaginationTable from "../../components/PaginationTable";

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

        setCategories([{
            id: 1,
            name: 'Construção',
            color: 'gray.300'
        },{
            id:2,
            name: 'Mobilistica',
            color: 'gray.400'
        },{
            id: 3,
            name: 'Games',
            color: 'red.200'
        },{
            id: 4,
            name: 'Artesian',
            color: 'red.400'
        },{
            id: 5,
            name: 'Artesian',
            color: 'red.200'
        },{
            id: 6,
            name: 'Artesian',
            color: 'gray.300'
        }])

        setCompanies([
            {
                id: 1,
                title:'Alicates e CIA',
                desc:'Nessa loja você pode pegar Alicates de corte, alicates de bico etc'
            },
            {
                id: 2,
                title:'Martelos e CIA',
                desc:'Nessa loja você pode pegar Martelos de corte, ótimo desconto'
            },
            {
                id: 3,
                title:'Betoneiras e CIA',
                desc:'Nessa loja você pode pegar Betoneiras de corte, alicates de bico etc'
            },
            {
                id: 4,
                title:'Carros e CIA',
                desc:'Nessa loja você pode pegar Carros de corte, carros 0 e semi-novos'
            },
            {
                id: 5,
                title:'Motos em Geral',
                desc:'Motos e bicicletas você pode encontrar aqui'
            },
            {
                id: 6,
                title:'Motos em Geral',
                desc:'Motos e bicicletas você pode encontrar aqui'
            },
            {
                id: 7,
                title:'Motos em Geral',
                desc:'Motos e bicicletas você pode encontrar aqui'
            }
        ]);

        setColumns(['id','nome','company','valor'])

        setProducts([
            {
                id:1,
                nome:'Secador',
                company:'Salão y',
                valor:800.00
            },
            {
                id:2,
                nome:'Chave de Fenda',
                company:'Madereira y',
                valor:300.00
            },
            {
                id:3,
                nome:'Video Game',
                company:'Xis Games cia',
                valor:1000.00
            },
            {
                id:4,
                nome:'Secador',
                company:'Salão y',
                valor:800.00
            },
            {
                id:5,
                nome:'Chave de Fenda',
                company:'Madereira y',
                valor:300.00
            },
            {
                id:6,
                nome:'Video Game',
                company:'Xis Games cia',
                valor:1000.00
            },
            {
                id:7,
                nome:'Secador',
                company:'Salão y',
                valor:800.00
            },
            {
                id:8,
                nome:'Chave de Fenda',
                company:'Madereira y',
                valor:300.00
            },
            {
                id:9,
                nome:'Video Game',
                company:'Xis Games cia',
                valor:1000.00
            }
        ])

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
                    <Box p='9'>
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

