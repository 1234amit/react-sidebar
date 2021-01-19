import Router from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const SidebarLink = styled(Link)`
    display:flex;
    color:#e1e9fc;
    justify-content:space-between;
    align-items:center;
    padding:20px;
    list-style:none;
    text-decoration:none;
    font-size:18px;
    

    &:hover {
        background:#252831;
        border-left: 4px solid #632ce4;
        cursor:pointer;
    }
`;

const SidebarLable = styled.span`
    margin-left:16px;
`;

const Submenu = ({ item }) =>{
    return(
        <>
            <SidebarLink to={item.path}>
                <div>
                    {item.icon}
                    <SidebarLable>{item.title}</SidebarLable>
                </div>
            </SidebarLink>
        </>
    )
}

export default Submenu;