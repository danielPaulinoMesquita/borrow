import React, {useEffect} from 'react';
import {
    Box,
    Editable,
    EditablePreview,
    EditableTextarea,
    FormControl,
    FormLabel,
    Grid,
    GridItem, Heading,
    Input, Select
} from '@chakra-ui/react'

export const Profile = () => {

    useEffect(()=> {
        console.log('Testando USE EFFECT NO PROFILE');
    },[])

    return (
        <FormControl>
            <Heading>Profile</Heading>

            <Grid templateColumns='repeat(4, 1fr)'
                  templateRows='repeat(3, 1fr)'
                  h='600px'
                  gap='7'>

                <GridItem colSpan='2' w='80%'>
                    <Box h='20'>
                        <FormLabel htmlFor="nome">Nome: </FormLabel>
                        <Input id="nome" type='text' />
                    </Box>

                    <Box h='20'>
                        <FormLabel htmlFor="email">Email: </FormLabel>
                        <Input id="email" type='email' />
                    </Box>

                    <Box h='20'>
                        <FormLabel htmlFor="email">CPF / CNPJ: </FormLabel>
                        <Input id="identifier" type='text' />
                    </Box>
                </GridItem>

                <GridItem colSpan='2' w='80%'>
                    <Box h='20'>
                        <FormLabel htmlFor="nome">Nascimento / Fundação: </FormLabel>
                        <Input id="nasc" type='date' />
                    </Box>

                    <Box h='20'>
                        <FormLabel htmlFor="tel">Telefone: </FormLabel>
                        <Input id="tel" type='text' />
                    </Box>

                    <Box h='20'>
                        <FormLabel htmlFor="tel">Segmento: </FormLabel>

                        <Select placeholder='Select ...'>
                            <option value='option1'>EMPRESA</option>
                            <option value='option2'>CLIENTE</option>
                        </Select>
                    </Box>

                </GridItem>

                <GridItem w='80%' colSpan='4'>
                    <Box>
                        <FormLabel htmlFor="description">Digite um texto</FormLabel>
                        <Editable border='1px'
                                  borderColor='gray.200'
                                  borderRadius='var(--chakra-radii-md)'
                                  defaultValue='Digite a descrição'
                                  height='20'>
                            <EditablePreview />
                            <EditableTextarea height='20'/>
                        </Editable>
                    </Box>
                </GridItem>
            </Grid>
        </FormControl>
    )
}

