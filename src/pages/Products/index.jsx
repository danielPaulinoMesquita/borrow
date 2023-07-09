import React, {useState} from 'react';
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
    const [name, setName] = useState('');
    const [value, setValue] = useState('');
    const [type, setType] = useState('');
    const [day, setDays] = useState('');
    const [description, setDescription] = useState('');

    const [hasError, setHasError] = useState(false);

    const isErrorName = name === '';
    const isErrorDay = day === '';
    const isErrorValue = value === '';
    const isErrorType = type === '';
    const isErrorDescription = description === '';

    const handleSubmit = () => {
        console.log('values: ',{
            name,value,type,day,description
        })
        if (isErrorValue || isErrorType){
            setHasError(true)
        } else {
            setHasError(false)
        }

    }

    return (
        <Box>
            { hasError &&
                <Alert status='error'>
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
                                <Input id="name" type='text' value={name} onChange={(e) => setName(e.target.value)}/>
                                {isErrorName &&
                                    <FormErrorMessage>Nome está vazio</FormErrorMessage>
                                }
                            </FormControl>
                        </Box>

                        <Box>
                            <FormControl isRequired isInvalid={isErrorType}>
                                <FormLabel htmlFor="type">Tipo: </FormLabel>
                                <Select placeholder='Select ...' onChange={(e)=> setType(e.target.value)}>
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
                                <NumberInput defaultValue={15} min={10} max={20} onChange={(e)=> setDays(e)}>
                                    <NumberInputField />
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
                                    <Input placeholder='20.00' id="value" onChange={(e)=> setValue(e.target.value)}/>
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
                                <Textarea placeholder='Here is a sample placeholder' onChange={e => setDescription(e.target.value)}/>
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

