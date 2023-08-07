import {useRef, useState} from "react";
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel, Grid, GridItem,
    Input,
    Spinner,
    Stack
} from "@chakra-ui/react";


const Login = () => {
    const userRef = useRef();
    const passwordRef = useRef();

    const [submit, setSubmit] = useState(false);
    const [loader, setLoader] = useState(false);

    const isErrorUser = userRef.current?.value === ''
    const isErrorPassword =  passwordRef.current?.value === ''

    const login = async () => {
        setLoader(true);

        const time = await new Promise((resolve)=> {
            setTimeout(()=> resolve('testando'),5000);
        })

        console.log('RESULTADO DO AWAIT: ',time)

        setLoader(false)

        setSubmit(!submit);
        console.log('REFS: ', {'user': userRef.current?.value, 'password': passwordRef.current?.value})
    }

    return (
        <Grid templateColumns='repeat(2, 1fr)' h='100%' gap={6}>
            <GridItem w='100%' h='100%'>
                I will put some text of welcome to users.
            </GridItem>
            <GridItem w='100%' h='100%'>
                <Box alignItems='center'
                     justifyContent='center'
                     width='100%'
                h='100%'>
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
                        <Button width='40%' border='2px' variant='solid' style={{backgroundColor: 'darkred', color: 'white'}} onClick={()=>login()}>
                            Login
                        </Button>
                        <Button width='40%' border='2px' variant='outline' style={{backgroundColor: 'white', color: 'darkred', border: 'solid', borderColor: 'darkred'}} >
                            Cadastrar
                        </Button>
                    </Box>
                </Box>
            </GridItem>
        </Grid>
    )
}

export default Login;