import React, { useState } from 'react'
import { SidebarMenuSubButton, SidebarMenuSubItem } from '../ui/sidebar'
import { NavLink } from 'react-router-dom'

const ChildLabel = ({item}) => {
    const [active, setAcitve] = useState(false);
    return (
        <NavLink
            to={item.url}
            className={({ isActive }) => {
                setAcitve(isActive);
                return isActive
                    ? 'bg-primary-red rounded-md text-white'
                    : ''
                }
            }
        >
            <SidebarMenuSubItem key={item.title}>
                <SidebarMenuSubButton asChild className="hover:bg-transparent active:bg-transparent ">
                    <span className={active ? "text-white hover:text-white active:text-white" : ''}>{item.title}</span>
                </SidebarMenuSubButton>
            </SidebarMenuSubItem>
        </NavLink>
    )
}

export default ChildLabel
