import './App.css';
import Header from "./pages/Header";
import {ChakraProvider} from "@chakra-ui/react";
import {useState} from "react";
import {Products} from "./pages/Products";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {Main} from "./pages/Main";
import {Profile} from "./pages/Profile";

function NotFound (){
    return (
        <h1>NÃO ENCONTRADO TELA VAI SER CUSTOMIZADA.</h1>
    )
}

function App() {
    const [sideOpen, setSideOpen] = useState(false);

    const isActive = (isOpen) => {
        setSideOpen(isOpen);
    }

    return (
        <ChakraProvider>
            <div className="App">
                <BrowserRouter>
                    <Header isActive={isActive}/>
                    <Main changeWidth={sideOpen}>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/home" element={<Home/>}/>
                            <Route path="/dashboard" element={<Home/>}/>
                            <Route path="/products" element={<Products/>}/>
                            <Route path="/profile" element={<Profile/>}/>
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </Main>
                </BrowserRouter>
            </div>
        </ChakraProvider>
    );
}

export default App;
