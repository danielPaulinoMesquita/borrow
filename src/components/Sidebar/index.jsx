import React from 'react'
import {Container, Content} from './styles'
import {FaChartBar, FaEnvelope, FaHome, FaTimes, FaUserAlt} from 'react-icons/fa'
import {Link} from 'react-router-dom';
import SidebarItem from '../SidebarItem'

const Sidebar = ({ active }) => {

    const closeSidebar = () => {
        active(false)
    }

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
                    <SidebarItem Icon={FaUserAlt} Text="Products" />
                </Link>
                <Link to="profile">
                    <SidebarItem Icon={FaEnvelope} Text="Profile" />
                </Link>
            </Content>
        </Container>
    )
}

export default Sidebar