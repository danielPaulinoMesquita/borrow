import React, {useState} from "react";
import {Container, HeadTitle} from "./styles";
import {FaBars} from "react-icons/fa";
import Sidebar from "../../components/Sidebar";


const Header = ({isActive}) => {
    const [sideBar, setSidebar] = useState(false)

    const showSidebar = () => {
        setSidebar(!sideBar);
        isActive(!sideBar);
    };

    return (
        <Container>
            <FaBars onClick={() => {
                showSidebar();
            }}/>

            {sideBar && <Sidebar active={(e) => {
                setSidebar(e);
                isActive(e);
            }}/>}
         <HeadTitle>Me Empresta AÍ</HeadTitle>
        </Container>
    )
}

export default Header;