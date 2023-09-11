import React from 'react'
import {Container, Content} from './styles'
import {FaAddressCard, FaBoxes, FaChartBar, FaHome, FaTimes, FaUserAlt} from 'react-icons/fa'
import {Link} from 'react-router-dom';
import SidebarItem from '../SidebarItem'
import {useAuth} from "../../contexts/AuthProvider";

const Sidebar = ({ active }) => {

    const closeSidebar = () => {
        active(false)
    }

    const auth = useAuth();
    console.log(' == AUTH ==', auth.userAuth)

    return (
        <Container sidebar={active}>
            <FaTimes onClick={closeSidebar} />
            <Content>
                <Link to="home">
                    <SidebarItem Icon={FaHome} Text="Home" />
                </Link>
                <Link to="dashboard">
                    <SidebarItem Icon={FaChartBar} Text="Dashboard" />
                </Link>
                <Link to="products">
                    <SidebarItem Icon={FaBoxes} Text="Products" />
                </Link>
                <Link to="profile">
                    <SidebarItem Icon={FaAddressCard} Text="Profile" />
                </Link>
                {!auth.userAuth &&
                    <Link to="login">
                        <SidebarItem Icon={FaUserAlt} Text="Login" />
                    </Link>
                }
            </Content>
        </Container>
    )
}

export default Sidebar