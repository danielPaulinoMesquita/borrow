import React, {useRef, useState} from 'react';
import {
    Alert,
    AlertIcon,
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Grid,
    GridItem,
    Heading,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Select,
    Textarea
} from "@chakra-ui/react";
import {BsFillCheckCircleFill} from "react-icons/bs";

export const Products = () => {
    const [submit, setSubmit] = useState(false);

    let nameRef = useRef(null);
    let valueRef = useRef(null);
    let typeRef = useRef(null);
    let dayRef = useRef(null);
    let descriptionRef = useRef(null);

    const isErrorName = nameRef.current?.value === '';
    const isErrorDay = dayRef.current?.value === '';
    const isErrorValue = valueRef.current?.value === '';
    const isErrorType = typeRef.current?.value === '';
    const isErrorDescription = descriptionRef.current?.value ==='';
    const hasError = isErrorName || isErrorDay || isErrorValue || isErrorValue|| isErrorType || isErrorDescription ;

    const handleSubmit = () => {
        setSubmit(!submit);
    }

    return (
        <Box>
            { hasError &&
                <Alert status='error' style={{borderRadius: 20, maxWidth: '90%'}}>
                    <AlertIcon />
                    Formulário com problemas
                </Alert>
            }
            <Heading>Produtos</Heading>
            <Grid templateColumns='repeat(4, 1fr)'
                      templateRows='repeat(3, 1fr)'
                      h='600px'
                      gap='7'>

                    <GridItem colSpan='2' w='80%'>

                        <Box>
                            <FormControl isRequired isInvalid={isErrorName}>
                                <FormLabel htmlFor="name">Nome: </FormLabel>
                                <Input id="name" type='text' ref={nameRef}/>
                                {isErrorName &&
                                    <FormErrorMessage>Nome está vazio</FormErrorMessage>
                                }
                            </FormControl>
                        </Box>

                        <Box>
                            <FormControl isRequired isInvalid={isErrorType}>
                                <FormLabel htmlFor="type">Tipo: </FormLabel>
                                <Select placeholder='Select ...' ref={typeRef}>
                                    <option value='Construção'>Construção</option>
                                    <option value='Esporte'>Esporte</option>
                                    <option value='Animais'>Animais</option>
                                    <option value='Carros'>Carros</option>
                                    <option value='Utensílios'>Utensílios</option>
                                </Select>
                                {isErrorType &&
                                    <FormErrorMessage>Selecione um Tipo</FormErrorMessage>
                                }
                            </FormControl>
                        </Box>
                    </GridItem>

                    <GridItem colSpan='2' w='80%'>
                        <Box>
                            <FormControl isRequired isInvalid={isErrorDay}>
                                <FormLabel htmlFor="daysToBorrow">Dias: </FormLabel>
                                <NumberInput defaultValue={15} min={10} max={20}>
                                    <NumberInputField ref={dayRef}/>
                                    <NumberInputStepper>
                                        <NumberIncrementStepper />
                                        <NumberDecrementStepper />
                                    </NumberInputStepper>
                                </NumberInput>
                                {isErrorDay &&
                                    <FormErrorMessage>Por favor, coloque a quantidade de dias </FormErrorMessage>
                                }
                            </FormControl>
                        </Box>

                        <Box>
                            <FormControl isRequired isInvalid={isErrorValue}>
                                <FormLabel htmlFor="tel">Valor: </FormLabel>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents='none'
                                        color='gray.300'
                                        fontSize='1.2em'
                                        children='$'
                                    />
                                    <Input placeholder='20.00' id="value"
                                           ref={valueRef}
                                    />
                                    <InputRightElement>
                                        <BsFillCheckCircleFill style={{color: 'green'}}/>
                                    </InputRightElement>
                                </InputGroup>
                                {isErrorValue &&
                                    <FormErrorMessage>Valor incorreto</FormErrorMessage>
                                }
                            </FormControl>
                        </Box>
                    </GridItem>

                    <GridItem w='80%' colSpan='4'>
                        <FormControl isRequired isInvalid={isErrorDescription}>
                            <FormLabel as='legend'>
                                Entre com o texto
                            </FormLabel>
                            <Box>
                                <Textarea placeholder='Here is a sample placeholder' ref={descriptionRef}/>
                            </Box>
                            {isErrorValue &&
                                <FormErrorMessage>Insira uma descrição para oseu produto</FormErrorMessage>
                            }
                        </FormControl>
                    </GridItem>
                </Grid>
            <Button
                onClick={()=> handleSubmit()}
                mt={4}
                colorScheme='teal'
                type='submit'
            >
                Submit
            </Button>
        </Box>
    )
}

