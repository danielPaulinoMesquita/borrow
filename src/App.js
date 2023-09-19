import './App.css';
import Header from "./pages/Header";
import {ChakraProvider} from "@chakra-ui/react";
import {useCallback, useState} from "react";
import Products from "./pages/Products";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {Main} from "./pages/Main";
import {Profile} from "./pages/Profile";
import Login from "./pages/Login";
import {AuthProvider} from "./contexts/AuthProvider";
import {RequireAuth} from "./contexts/RequireAuth";
import RequireAuthSecondApproach from "./contexts/RequireAuthSecondApproach";

function NotFound (){
    return (
        <h1>NÃO ENCONTRADO TELA VAI SER CUSTOMIZADA.</h1>
    )
}

function PageTest (){
    return (
        <h1>Only access for Customers</h1>
    )
}

function App() {
    const [sideOpen, setSideOpen] = useState(false);

    const isActive = useCallback((isOpen) => {
        console.log('aqui')
        setSideOpen(isOpen);
    },[])


    return (
        <ChakraProvider>
            <AuthProvider>
                <div className="App">
                    <BrowserRouter>
                        <Header isActive={isActive}/>
                        <Main changeWidth={sideOpen}>
                            <Routes>
                                {/*!--PUBLIC PATHS --*/}
                                <Route path="/" element={<Home/>}/>
                                <Route path="/login" element={<Login/>}/>

                                {/*!--PROTECT PATHS --*/}
                                <Route path="/home" element={<Home/>}/>
                                <Route path="/dashboard" element={<Home/>}/>
                                <Route path="/products" element={<Products/>}/>

                                {/*REQUEST AUTHENTICATION TO ACCESS PROFILE*/}

                                {/*THIS IS THE ONE OF APPROACH THAT VERIFY IF AUTH AND EXISTS ROLE (RequireAuthSecondApproach)*/}
                                <Route element={<RequireAuthSecondApproach allowedRoles={['CUSTOMER']} />}>
                                    <Route path='/test' element={<PageTest/>}/>
                                </Route>

                                {/*THIS IS THE ONE OF APPROACH THAT VERIFY IF AUTH AND EXISTS ROLE (RequireAuth)*/}
                                <Route path="/profile" element={
                                    <RequireAuth allowedRoles={['COMPANY', 'CUSTOMER']}>
                                        <Profile/>
                                    </RequireAuth>
                                }/>

                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </Main>
                    </BrowserRouter>
                </div>
            </AuthProvider>
        </ChakraProvider>
    );
}

export default App;
