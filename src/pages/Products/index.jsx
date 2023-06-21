import React from 'react';
import {
    Box,
    Editable,
    EditablePreview,
    EditableTextarea,
    FormControl,
    FormLabel,
    Grid,
    GridItem,
    Heading,
    Input,
    InputGroup,
    InputLeftElement, InputRightElement,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper
} from "@chakra-ui/react";
import * as PropTypes from "prop-types";

function CheckIcon(props) {
    return null;
}

CheckIcon.propTypes = {color: PropTypes.string};
export const Products = () => {
    const defaultText = 'Este produto tem o objetivo de cortar folhas dos jardins. O Produto é novo, ' +
        'comprado recentente, produto de marca conhecido pela qualidade';

    return (
        <Box>
            <Heading>Produtos</Heading>
            <FormControl>
                <Grid templateColumns='repeat(4, 1fr)'
                      templateRows='repeat(3, 1fr)'
                      h='600px'
                      gap='7'>

                    <GridItem colSpan='2' w='80%'>
                        <Box h='20'>
                            <FormLabel htmlFor="name">Name: </FormLabel>
                            <Input id="name" type='text' />
                        </Box>

                        <Box h='20'>
                            <FormLabel htmlFor="email">Valor: </FormLabel>
                            <Input id="email" type='email' />
                        </Box>
                    </GridItem>

                    <GridItem colSpan='2' w='80%'>
                        <Box h='20'>
                            <FormLabel htmlFor="daysToBorrow">Dias: </FormLabel>
                            <NumberInput defaultValue={15} min={10} max={20}>
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </Box>

                        <Box h='20'>
                            <FormLabel htmlFor="tel">Valor: </FormLabel>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents='none'
                                    color='gray.300'
                                    fontSize='1.2em'
                                    children='$'
                                />
                                <Input placeholder='20.00' />
                                <InputRightElement>
                                    <CheckIcon color='green.500' />
                                </InputRightElement>
                            </InputGroup>
                        </Box>
                    </GridItem>

                    <GridItem w='80%' colSpan='4'>
                        <Box>
                            <FormLabel htmlFor="description">Digite um texto</FormLabel>
                            <Editable border='1px'
                                      borderColor='gray.200'
                                      borderRadius='var(--chakra-radii-md)'
                                      defaultValue={defaultText}
                                      height='20'>
                                <EditablePreview />
                                <EditableTextarea height='20'/>
                            </Editable>
                        </Box>
                    </GridItem>
                </Grid>
            </FormControl>

        </Box>
    )
}

