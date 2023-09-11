import {useRef, useState} from "react";
import {
    Box,
    Button, CardBody, CardFooter, CardHeader,
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    Grid,
    GridItem,
    Heading,
    Input,
    Spinner, Text, Card
} from "@chakra-ui/react";
import {useAuth} from "../../contexts/AuthProvider";
import {useNavigate, useLocation} from "react-router-dom";


const Login = () => {
    const userRef = useRef();
    const passwordRef = useRef();

    const [submit, setSubmit] = useState(false);
    const [loader, setLoader] = useState(false);

    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const redirectPath = location.state?.path || '/';

    const isErrorUser = userRef.current?.value === ''
    const isErrorPassword =  passwordRef.current?.value === ''

    const login = async () => {
        setLoader(true);

        const time = await new Promise((resolve)=> {
            setTimeout(()=> resolve('testando'),5000);
        })

        console.log('RESULTADO DO AWAIT: ',time)

        // todo I will do a call to service and get the ROLES


        setLoader(false)

        setSubmit(!submit);
        console.log('REFS: ', {'user': userRef.current?.value, 'password': passwordRef.current?.value})

        // Checking if it has some inout empty
        if (userRef.current?.value && passwordRef.current?.value){
            auth.login(userRef.current?.value)
            navigate(redirectPath, {replace: true});
        }
    }

    return (
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
                            <Button width='80%' variant='solid' style={{backgroundColor: 'darkred', color: 'white'}} onClick={()=>login()}>
                                Login
                            </Button>
                        </Box>
                        <Box p='2'>
                            <Button width='80%' border='2px' variant='outline' style={{backgroundColor: 'white', color: 'darkred', border: 'solid', borderColor: 'darkred'}} >
                                Cadastrar
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </GridItem>
        </Grid>
    )
}

export default Login;