import React, { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { CollapsibleTrigger } from '@/components/ui/collapsible'
import { SidebarGroupLabel } from '@/components/ui/sidebar'

const ParentLabel = ({ item }) => {
    const [active, setActive] = useState(false)
    return item.items?.length > 0 ? (
        <SidebarGroupLabel
            asChild
            className="group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
        >
            <CollapsibleTrigger
                className={`hover:bg-transparent active:bg-transparent flex justify-between w-full  ${
                    active && item.items?.length == 0
                        ? 'text-white hover:text-white'
                        : ''
                }`}
            >
                <span>{item.title}</span>
                <span>
                    {item.items?.length > 0 ? (
                        <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                    ) : null}
                </span>
            </CollapsibleTrigger>
        </SidebarGroupLabel>
    ) : (
        <NavLink
            to={item.url}
            className={({ isActive }) => {
                setActive(isActive)
                return isActive && item.items?.length == 0
                    ? 'bg-primary-red rounded-md'
                    : ''
            }}
        >
            <SidebarGroupLabel
                asChild
                className="group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            >
                <CollapsibleTrigger
                    className={`hover:bg-transparent flex justify-between w-full  ${
                        active && item.items?.length == 0
                            ? 'text-white hover:text-white'
                            : ''
                    }`}
                >
                    <span>{item.title}</span>
                    <span>
                        {item.items?.length > 0 ? (
                            <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                        ) : null}
                    </span>
                </CollapsibleTrigger>
            </SidebarGroupLabel>
        </NavLink>
    )
}

export default ParentLabel
