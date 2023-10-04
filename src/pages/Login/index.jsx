import React, {useRef, useState} from "react";
import {
    Alert, AlertIcon,
    Box,
    Button, ButtonGroup,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    Grid,
    GridItem,
    Heading,
    Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select,
    Spinner,
    Text, Textarea, useDisclosure
} from "@chakra-ui/react";
import {useAuth} from "../../contexts/AuthProvider";
import {useLocation, useNavigate} from "react-router-dom";


const Login = () => {
    const userRef = useRef();
    const passwordRef = useRef();
    const nameRef = useRef();
    const emailRef = useRef();
    const documentRef = useRef();
    const segmentRef = useRef();

    const [submit, setSubmit] = useState(false);
    const [loader, setLoader] = useState(false);

    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const redirectPath = location.state?.path
        || location.state?.from?.pathname
        || '/';

    const isErrorUser = userRef.current?.value === '';
    const isErrorPassword =  passwordRef.current?.value === '';
    const isErrorName = nameRef.current?.value === '';
    const isErrorEmail = emailRef.current?.value === '';
    const isErrorDocument = documentRef.current?.value === '';
    const isErrorSegment = segmentRef.current?.value === '';
    const hasError = isErrorName || isErrorDocument ;


    const handleSubmit = () => {
        setSubmit(!submit);
    }

    const handleLogout = () => {
        auth.logout();
        navigate('/');
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        setLoader(true);

        const time = await new Promise((resolve)=> {
            setTimeout(()=> resolve('testando'),5000);
        })

        console.log('RESULTADO DO AWAIT: ',time)

        setLoader(false)

        setSubmit(!submit);
        console.log('REFS: ', {'user': userRef.current?.value, 'password': passwordRef.current?.value})

        // Checking if it has some input empty
        if (userRef.current?.value && passwordRef.current?.value){
            const payload = {'email': userRef.current?.value, 'password': passwordRef.current?.value};
            await auth.login(payload)
            navigate(redirectPath, {replace: true});
        }
    }

    return (
        <Box>
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                <GridItem>
                    <Card align='center'
                          h='100%'
                          bgGradient='linear(darkred, #FA8072, MistyRose)'>
                        <CardHeader>
                            <Heading size='lg' color='white'>Borrow Me / Me Empresta aí! </Heading>
                        </CardHeader>
                        <CardBody>
                            <Text color='white' size='lg'>
                                Join the BorrowMe community today and experience the convenience, affordability, and sustainability of collaborative borrowing.
                                Unleash the power of shared resources, reduce waste, and unlock new possibilities with the BorrowMe system.
                                Borrow smart, borrow hassle-free, and embrace a world of endless opportunities at your fingertips.

                                Welcome to BorrowMe – where borrowing becomes effortless!
                            </Text>
                        </CardBody>
                        <CardFooter>
                            <Button colorScheme='red' style={{backgroundColor: 'darkred'}}>View here</Button>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem>
                    <Box alignItems='center'
                         justifyContent='center' h='100%'>
                        { loader &&
                            <Box style={
                                {display: "flex",
                                    width: '80%',
                                    justifyContent: 'center'}
                            }>
                                <Spinner
                                    thickness='4px'
                                    speed='0.65s'
                                    emptyColor='gray.200'
                                    color='red.500'
                                    size='xl'/>
                            </Box>
                        }
                        <FormControl isInvalid={isErrorUser}>
                            <FormLabel>Usuário</FormLabel>
                            <Input ref={userRef} htmlSize={4} width='80%'/>
                            {!isErrorUser ? (
                                <FormHelperText>
                                    Enter with your user.
                                </FormHelperText>
                            ) : (
                                <FormErrorMessage>User is required.</FormErrorMessage>
                            )}
                        </FormControl>
                        <FormControl isInvalid={isErrorPassword}>
                            <FormLabel>Senha:</FormLabel>
                            <Input ref={passwordRef} htmlSize={4} width='80%'/>
                            {!isErrorPassword ? (
                                <FormHelperText>
                                    Enter your password.
                                </FormHelperText>
                            ) : (
                                <FormErrorMessage>password is required.</FormErrorMessage>
                            )}
                        </FormControl>
                        <Box>
                            <Box p='2'>
                                <Button width='80%' variant='solid'
                                        style={{backgroundColor: 'darkred', color: 'white'}}
                                        onClick={(e)=>handleLogin(e)}>
                                    Login
                                </Button>
                            </Box>
                            <Box p='2'>
                                <Button width='80%' border='2px' variant='outline'
                                        style={{backgroundColor: 'white', color: 'darkred', border: 'solid', borderColor: 'darkred'}}
                                        onClick={onOpen} >
                                    Cadastrar
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </GridItem>
            </Grid>
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

                        <Box>
                            <FormControl isRequired isInvalid={isErrorSegment}>

                                <FormLabel htmlFor="segment">Segmento: </FormLabel>

                                <Select placeholder='Select ...' ref={segmentRef}>
                                    <option value='option1'>EMPRESA</option>
                                    <option value='option2'>CLIENTE</option>
                                </Select>
                            </FormControl>
                        </Box>
                    </ModalBody>

                    <ModalFooter>
                        <ButtonGroup spacing='2'>
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
                        </ButtonGroup>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}

export default Login;