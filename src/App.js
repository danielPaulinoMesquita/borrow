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

function NotFound (){
    return (
        <h1>NÃO ENCONTRADO TELA VAI SER CUSTOMIZADA.</h1>
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
                                <Route path="/profile" element={
                                    <RequireAuth>
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
