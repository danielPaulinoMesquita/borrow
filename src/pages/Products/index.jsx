import React, {useState} from 'react';
import {
    Box,
    Editable,
    EditablePreview,
    EditableTextarea,
    FormControl, FormErrorMessage, FormHelperText,
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
    NumberInputStepper, Select, Text, Textarea
} from "@chakra-ui/react";
import * as PropTypes from "prop-types";

function CheckIcon(props) {
    return null;
}

CheckIcon.propTypes = {color: PropTypes.string};
export const Products = () => {
    const [name, setName] = useState('');
    const isError = name === '';
    console.log('teste',isError)

    return (
        <Box>
            <Heading>Produtos</Heading>

            <Grid templateColumns='repeat(4, 1fr)'
                      templateRows='repeat(3, 1fr)'
                      h='600px'
                      gap='7'>

                    <GridItem colSpan='2' w='80%'>

                        <Box>
                            <FormControl isRequired isInvalid={isError}>
                                <FormLabel htmlFor="name">Nome: </FormLabel>
                                <Input id="name" type='text' value={name} onChange={(n) => setName(n.target.value)}/>
                                {isError &&
                                    <FormErrorMessage>Nome está vazio</FormErrorMessage>
                                }
                            </FormControl>
                        </Box>

                        <Box h='20'>
                            <FormControl isRequired>
                                <FormLabel htmlFor="email">Valor: </FormLabel>
                                <Input id="email" type='email' />
                            </FormControl>
                        </Box>

                        <Box h='20'>
                            <FormControl isRequired>
                                <FormLabel htmlFor="type">Tipo: </FormLabel>
                                <Select placeholder='Select ...'>
                                    <option value='option1'>Construção</option>
                                    <option value='option2'>Esporte</option>
                                    <option value='option3'>Animais</option>
                                    <option value='option4'>Carros</option>
                                    <option value='option5'>Utensílios</option>
                                </Select>
                            </FormControl>
                        </Box>
                    </GridItem>

                    <GridItem colSpan='2' w='80%'>
                        <Box h='20'>
                            <FormControl isRequired>
                                <FormLabel htmlFor="daysToBorrow">Dias: </FormLabel>
                                <NumberInput defaultValue={15} min={10} max={20}>
                                    <NumberInputField />
                                    <NumberInputStepper>
                                        <NumberIncrementStepper />
                                        <NumberDecrementStepper />
                                    </NumberInputStepper>
                                </NumberInput>
                            </FormControl>
                        </Box>

                        <Box h='20'>
                            <FormControl isRequired>
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
                            </FormControl>
                        </Box>
                    </GridItem>

                    <GridItem w='80%' colSpan='4'>
                        <FormControl isRequired>
                            <FormLabel as='legend'>
                                Entre com o texto
                            </FormLabel>
                            <Box>
                                <Textarea placeholder='Here is a sample placeholder' />
                            </Box>
                        </FormControl>
                    </GridItem>
                </Grid>

        </Box>
    )
}

