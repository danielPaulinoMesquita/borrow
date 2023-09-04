import React, {useRef, useState} from 'react';
import {
    Alert,
    AlertIcon,
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Grid,
    GridItem,
    Heading,
    Image,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Select,
    Stack,
    Text,
    Textarea,
    useDisclosure
} from '@chakra-ui/react'
import {useAuth} from "../../contexts/AuthProvider";
import {useNavigate} from "react-router-dom";

export const Profile = () => {
    const [submit, setSubmit] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const auth = useAuth();
    const navigate = useNavigate();

    let nameRef = useRef(null);
    let emailRef = useRef(null);
    let documentRef = useRef(null);
    let dateRef = useRef(null);
    let telRef = useRef(null);
    let descriptionRef = useRef(null);

    const isErrorName = nameRef.current?.value === '';
    const isErrorEmail = emailRef.current?.value === '';
    const isErrorDocument = documentRef.current?.value === '';
    const isErrorDate = dateRef.current?.value === '';
    const isErrorTel = telRef.current?.value === '';
    const isErrorDescription = descriptionRef.current?.value ==='';
    const hasError = isErrorName || isErrorDate || isErrorTel || isErrorDescription|| isErrorDocument ;

    const handleSubmit = () => {
        setSubmit(!submit);
    }

    const handleLogout = () => {
        auth.logout();
        navigate('/');
    }

    return (
        <Box>
            <Heading>Profile</Heading>

            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
            >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                    alt='Caffe Latte'
                />

                <Stack>
                    <CardBody>
                        <Heading size='md'>Welcome {auth.userAuth.user}</Heading>

                        <Text py='2'>
                            Here will be a some description of company or user, this description obey all rules from platform. We sales a lot of
                            coffee of a lot of kind of coffees.
                        </Text>
                    </CardBody>

                    <CardFooter>
                        <Button
                            mt={4}
                            type='submit'
                            colorScheme='red'
                            style={{backgroundColor: 'darkred'}}
                            onClick={onOpen}>
                            Edit / Save new profile
                        </Button>
                    </CardFooter>
                </Stack>
            </Card>

            <Modal
                isOpen={isOpen}
                onClose={onClose}
                size='3xl'
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create your account</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        { hasError &&
                            <Alert status='error' style={{borderRadius: 20, maxWidth: '90%'}}>
                                <AlertIcon />
                                Formulário com problemas
                            </Alert>
                        }
                        <Grid templateColumns='repeat(4, 1fr)'
                              templateRows='repeat(3, 1fr)'
                              h='600px'
                              gap='7'>

                            <GridItem colSpan='2' w='80%'>
                                <Box>
                                    <FormControl isRequired isInvalid={isErrorName}>
                                        <FormLabel htmlFor="nome">Nome: </FormLabel>
                                        <Input id="nome" type='text' ref={nameRef}/>
                                        {isErrorName &&
                                            <FormErrorMessage>Nome está vazio</FormErrorMessage>
                                        }
                                    </FormControl>
                                </Box>

                                <Box>
                                    <FormControl isRequired isInvalid={isErrorEmail}>
                                        <FormLabel htmlFor="email">Email: </FormLabel>
                                        <Input id="email" type='email' ref={emailRef} />
                                        {isErrorEmail &&
                                            <FormErrorMessage>Email incorreto</FormErrorMessage>
                                        }
                                    </FormControl>
                                </Box>

                                <Box>
                                    <FormControl isRequired isInvalid={isErrorDocument}>
                                        <FormLabel htmlFor="document">CPF / CNPJ: </FormLabel>
                                        <Input id="identifier" type='text' ref={documentRef} />
                                        {isErrorDocument &&
                                            <FormErrorMessage>Documento incorreto</FormErrorMessage>
                                        }
                                    </FormControl>
                                </Box>
                            </GridItem>

                            <GridItem colSpan='2' w='80%'>
                                <Box>
                                    <FormControl isRequired isInvalid={isErrorDate}>
                                        <FormLabel htmlFor="date">Nascimento / Fundação: </FormLabel>
                                        <Input id="nasc" type='date' ref={dateRef}/>
                                        { isErrorDate &&
                                            <FormErrorMessage>Date incorreto</FormErrorMessage>
                                        }
                                    </FormControl>
                                </Box>

                                <Box>
                                    <FormControl isRequired isInvalid={isErrorTel}>

                                        <FormLabel htmlFor="tel">Telefone: </FormLabel>
                                        <Input id="tel" type='text' ref={telRef}/>
                                        { isErrorTel &&
                                            <FormErrorMessage>Telefone incorreto</FormErrorMessage>
                                        }
                                    </FormControl>
                                </Box>

                                <Box>
                                    <FormLabel htmlFor="tel">Segmento: </FormLabel>

                                    <Select placeholder='Select ...'>
                                        <option value='option1'>EMPRESA</option>
                                        <option value='option2'>CLIENTE</option>
                                    </Select>
                                </Box>

                            </GridItem>

                            <GridItem w='80%' colSpan='4'>
                                <Box>
                                    <FormControl isRequired isInvalid={isErrorDescription}>
                                        <FormLabel as='legend'>
                                            Entre com o texto
                                        </FormLabel>
                                        <Box>
                                            <Textarea placeholder='Here is a sample placeholder' ref={descriptionRef}/>
                                        </Box>
                                        {isErrorDescription &&
                                            <FormErrorMessage>Insira uma descrição para oseu produto</FormErrorMessage>
                                        }
                                    </FormControl>
                                </Box>
                            </GridItem>
                        </Grid>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            onClick={()=> handleSubmit()}
                            mt={4}
                            type='submit'
                            colorScheme='red'
                            style={{backgroundColor: 'darkred'}}
                        >
                            Submit
                        </Button>
                        <Button
                            mt={4}
                            type='submit'
                            onClick={onClose}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </Box>
    )
}

